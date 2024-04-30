import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./genFile.css"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ApiService from "../../service/service";
import Loading from "../component/Loading";
import ExportFile from "../component/ExportFile";
import Noti from "../component/Noti";
export default function GenFile() {
    const [selectedFileDSSV, setSelectedFileDSSV] = useState(null);
    const [selectedFileTemp, setSelectedFileTemp] = useState(null);
    const [selectedFileJson, setSelectedFileJson] = useState(null);
    const [noti, setNoti] = useState(false);
    const [loading, setLoading] = useState(false);
    const handCloseNoti = () => {
        setNoti(false)
    }
    const handleFileChangeList = (event) => {
        const file = event.target.files[0];
        setSelectedFileDSSV(file);
    };
    const handleFileChangeTemp = (event) => {
        const file = event.target.files[0];
        setSelectedFileTemp(file);
    };
    const handleFileChangeJson = (event) => {
        const file = event.target.files[0];
        setSelectedFileJson(file);
    };
    const genFileEvaluate = async (selectedFileJson, selectedFileDSSV, selectedFileTemp) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('fileJson', selectedFileJson);
        formData.append('fileTemplate', selectedFileTemp);
        formData.append('fileList', selectedFileDSSV);
        try {

            const listUrl = await ApiService.writeDataToFile(formData)
            listUrl.forEach(l => {
                ExportFile.downloadExcelFromBase64(l.base64, l.fileName);
            })
            setLoading(false);
        } catch (e) {
            console.error(e)
        }
    }
    const handleGenFile = async () => {
        if (selectedFileJson && selectedFileDSSV && selectedFileTemp) {
            genFileEvaluate(selectedFileJson, selectedFileDSSV, selectedFileTemp);
        } else {
            setNoti(true)
        }
    }
    return (
        <>
            {loading && <Loading />}
            {noti && <Noti onCloseNoti={handCloseNoti} mess={"Bạn cần chọn đầy đủ các file!"}/>}
            <Header />
            <div className="main">
                <div className="container">
                    <div className="formHeader">
                        GENERATE FILE
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="checkSign_body">
                                <div className="checkSign_body_icon">
                                    <img src="assets/img/upload.png" alt="" />
                                </div>
                                <div className="checkSign_body_detail">Vui lòng tải lên file DSSV</div>
                                {selectedFileDSSV && <span id="fileName">{selectedFileDSSV.name}</span>}
                                <div className="checkSign_body_button">
                                    <div className="input-area btn">
                                        <img src="/assets/img/Scroll Up.png" alt="" />
                                        <span>Chọn file tải lên</span>
                                        <input type="file" name="files" accept=".xlsx, .xls" onChange={handleFileChangeList} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkSign_body">
                                <div className="checkSign_body_icon">
                                    <img src="assets/img/upload.png" alt="" />
                                </div>
                                <div className="checkSign_body_detail">Vui lòng tải file Excel template</div>
                                {selectedFileTemp && <span id="fileName">{selectedFileTemp.name}</span>}
                                <div className="checkSign_body_button">
                                    <div className="input-area btn">
                                        <img src="/assets/img/Scroll Up.png" alt="" />
                                        <span>Chọn file tải lên</span>
                                        <input type="file" name="files" accept=".xlsx, .xls" onChange={handleFileChangeTemp} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkSign_body">
                                <div className="checkSign_body_icon">
                                    <img src="assets/img/upload.png" alt="" />
                                </div>
                                <div className="checkSign_body_detail">Vui lòng tải file Json template</div>
                                {selectedFileJson && <span id="fileName">{selectedFileJson.name}</span>}
                                <div className="checkSign_body_button">
                                    <div className="input-area btn">
                                        <img src="/assets/img/Scroll Up.png" alt="" />
                                        <span>Chọn file tải lên</span>
                                        <input type="file" name="files" accept=".json" onChange={handleFileChangeJson} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="btn marginTop20" onClick={handleGenFile}>Generate File</div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}