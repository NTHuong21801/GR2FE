import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./genFile.css"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ApiService from "../../service/service";
import Loading from "../component/Loading";
import ExportFile from "../component/ExportFile";
export default function GenFile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [typeFile, setTypeFile] = useState('');
    const [loading, setLoading] = useState(false);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleChange = (event) => {
        setTypeFile(event.target.value);
    };
    const genFileEvaluate = async (selectedFile, fileType) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('file', selectedFile);
        try {
            const json = await ApiService.readFileUpload(formData);
            var jsonInput = [];
            json.forEach(j => {
                jsonInput.push(JSON.stringify(j));
            })
            const data = JSON.stringify(
                {
                    "fileType": fileType,
                    "json": jsonInput
                }
            );
            const listUrl = await ApiService.writeDataToFile(data)
            listUrl.forEach(l => {
                ExportFile.downloadExcelFromBase64(l.base64, l.fileName);
            })
            setLoading(false);
        } catch (e) {
            console.error(e)
        }
    }
    const handleGenFile = async () => {
        if (selectedFile && typeFile) {
            genFileEvaluate(selectedFile, typeFile);
        } else {
            alert("Bạn cần tải file lên và chọn dạng file cần xuất ra!")
        }
    }
    return (
        <>
            {loading && <Loading />}
            <Header />
            <div className="main">
                <div className="container">
                    <div className="checkBlock">
                        <div className="formHeader">
                            GENERATE FILE
                        </div>
                        <div className="row marginTop20">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Dạng file</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={typeFile}
                                        label="Dạng file"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="EXCEL_EVALUATE">Đánh giá ĐATN</MenuItem>
                                        <MenuItem value="EXCEL_DEBATE">Phản biện ĐATN</MenuItem>
                                        <MenuItem value="EXCEL_DIVIDE">Phân công nhiệm vụ ĐATN</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="col-md-10 checkSign_body">
                            <div className="checkSign_body_icon">
                                <img src="assets/img/upload.png" alt="" />
                            </div>
                            <div className="checkSign_body_detail">Vui lòng tải file (.xlsx, .xls) của bạn lên</div>
                            {selectedFile && <span id="fileName">{selectedFile.name}</span>}
                            <div className="checkSign_body_button">
                                <div className="input-area btn">
                                    <img src="/assets/img/Scroll Up.png" alt="" />
                                    <span>Chọn file tải lên</span>
                                    <input type="file" name="files" accept=".xlsx, .xls" onChange={handleFileChange} />
                                </div>
                                <div className="btn" onClick={handleGenFile}>Generate File</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}