import { useState } from "react";

import Footer from "../footer/Footer";
import "./genFile.css"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ApiService from "../../service/service";
import Loading from "../component/Loading";
import ExportFile from "../component/ExportFile";
import Noti from "../component/Noti";
import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PopupAnoGenFile from "../component/PopupAnoGenFile";
import { useSelector } from "react-redux";
export default function GenFile() {
    const token = useSelector((state) => state.accessToken);
    const [selectedFileDSSV, setSelectedFileDSSV] = useState(null);
    const [selectedFileTemp, setSelectedFileTemp] = useState(null);
    const [selectedFileJson, setSelectedFileJson] = useState(null);
    const [noti, setNoti] = useState(false);
    const [notiErr, setNotiErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const handCloseNoti = () => {
        setNoti(false)
    }
    const handCloseNotiErr = () => {
        setNotiErr(false)
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

            const response = await ApiService.writeDataToFile(formData, token)
            if(response.responseCode === '200'){
                ExportFile.downloadZip(response.body);
                setLoading(false);
            }else{
                
            }
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
    const [open, setOpen] = useState(true);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const [ano, setAno] = useState(true);
    const handlePopupAno = () => {
        setAno(true);
    }
    const handCloseAno = () => {
        setAno(false);
    }
    const [popup, setPopup] = useState(false);
    const handleClosePopup = () => {
        setPopup(false);
    }
    return (
        <>
            {popup &&  <Noti onCloseNoti={handleClosePopup} mess={"Có lỗi trong quá trình tạo File, vui lòng kiểm tra lại!"}/>}
            {ano && <PopupAnoGenFile  onClose={handCloseAno}/>}
            {loading && <Loading />}
            {noti && <Noti onCloseNoti={handCloseNoti} mess={"Bạn cần chọn đầy đủ các file!"} />}
            {notiErr && <Noti onCloseNoti={handCloseNotiErr} mess={"Bạn cần chọn file template và file json đúng cấu hình!"} />}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Topbar open={open} handleOpen={handleDrawerOpen} />
                <MiniDrawer open={open} handClose={handleDrawerClose} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <div className="main">
                        <div className="container">
                            <div className="formHeader">
                                GENERATE FILE
                                <AnnouncementIcon className="announIcon" onClick={handlePopupAno}/> 
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
                </Box>
            </Box>
            <Footer />
        </>
    )
}