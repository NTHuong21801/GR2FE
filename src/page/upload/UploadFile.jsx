import Footer from "../footer/Footer";
import React, { useEffect, useState } from "react";
import ApiService from "../../service/service";
import Loading from "../component/Loading";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./upload.css";
import Noti from "../component/Noti";
import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
export default function UploadFile() {
    const [loading, setLoading] = useState(false);
    const [typeFile, setTypeFile] = useState('');
    const [listFile, setListFile] = useState({});
    const [noti, setNoti] = useState(false);
    const [errMess, setErrMes] = useState('');
    const [open, setOpen] = React.useState(true);
    const [typeMSSV, setTypeMSSV] = useState(false);
    const [student, setStudent] = useState();
    const [studentSelect, setStudentSelect] = useState();
    const [selectedFileJson, setSelectedFileJson] = useState(null);
    const email = localStorage.getItem('email');
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await ApiService.getStudentByTeacherEmail(email);
                setStudent(res.body);
            } catch (err) {
                console.log(err);
            }
        }
        fetchStudent();
    }, [])
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleChange = (event) => {
        setTypeFile(event.target.value);
        if (event.target.value == 'EXCEL_OTHER') {
            setTypeMSSV(true);
        }
    };
    const handleFileChange = (event) => {
        const files = event.target.files;
        setListFile(files);
    }
    var count = 1;
    const handleUploadListFile = async () => {
        if (listFile && typeFile && selectedFileJson) {
            var mssv = "";
            if (typeFile == "EXCEL_OTHER") {
                if (studentSelect) {
                    mssv = studentSelect;
                } else {
                    setNoti(true);
                    setErrMes("Bạn cần chọn mssv ứng với các file tải lên");
                    return;
                }
            }
            setLoading(true);
            const formData = new FormData();
            Array.from(listFile).forEach(file => {
                formData.append('file', file); // Chú ý key 'files' ở đây
            });
            formData.append('fileJson', selectedFileJson);
            try {
                const json = await ApiService.readFileToDB(formData, typeFile, mssv);
                if (json == 'Done') {
                    setLoading(false);
                    setNoti(true);
                    setErrMes("Upload file successfully")
                    if (typeFile == "EXCEL_DIVIDE") {
                        window.location.href = "divide";
                    } else if (typeFile == "EXCEL_EVALUATE") {
                        window.location.href = "evaluate";
                    } else if (typeFile == "EXCEL_DEBATE") {
                        window.location.href = "debate";
                    } else {
                        window.location.href = "student"
                    }
                } else {
                    setLoading(false);
                    setNoti(true);
                    setErrMes("Upload file failed")
                }
            } catch (e) {
                console.error(e);
                setLoading(false);
            }
        } else {
            setNoti(true);
            setErrMes("Bạn cần chọn đủ dạng file, upload file json và danh sách các file cần upload")
        }
    }
    const handleChangeStudent = (e) => {
        setStudentSelect(e.target.value);
    }
    const handleFileChangeJson = (event) => {
        const file = event.target.files[0];
        setSelectedFileJson(file);
    };
    const handleCloseNoti = () => {
        setNoti(false);
    }
    return (
        <>
            {loading && <Loading />}
            {noti && <Noti onCloseNoti={handleCloseNoti} mess={errMess} />}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Topbar open={open} handleOpen={handleDrawerOpen} />
                <MiniDrawer open={open} handClose={handleDrawerClose} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <div className="main">
                        <div className="container">
                            <div className="checkBlock marginTop20">
                                <div className="formHeader">
                                    UPLOAD FILE
                                </div>
                                <div className="marginTop20">
                                    <div className="row marginBottom20">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Dạng file</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={typeFile}
                                                    label="Dạng file"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value="EXCEL_EVALUATE">Phiếu đánh giá ĐATN</MenuItem>
                                                    <MenuItem value="EXCEL_DEBATE">Phiếu phản biện ĐATN</MenuItem>
                                                    <MenuItem value="EXCEL_DIVIDE">Phiếu phân công nhiệm vụ ĐATN</MenuItem>
                                                    <MenuItem value="EXCEL_OTHER">Phiếu khác</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                    <div className="row marginBottom20">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
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
                                        <div className="col-md-2"></div>
                                    </div>
                                    {typeMSSV &&
                                        <div className="row marginBottom20">
                                            <div className="col-md-2"></div>
                                            <div className="col-md-8">
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Mã số sinh viên</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={studentSelect}
                                                        label="Mã số sinh viên"
                                                        onChange={handleChangeStudent}
                                                    >
                                                        {student && student.map(s => (
                                                            <MenuItem key={s.mssv} value={s.mssv}>{s.mssv}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="col-md-2"></div>
                                        </div>}
                                    <div className="row btnUpload">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 positionRelative">
                                            <button className="btn height40">Chọn danh sách file tải lên</button>
                                            <input type="file" className='positionAbsolute height40' accept=".xlsx, .xls" multiple onChange={handleFileChange} />
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                    <div className="row marginTop20">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 textaligncenter">
                                            {listFile.length > 0 && (
                                                <span>Số lượng file tải lên: <strong className="colorBlue">{listFile.length}</strong> </span>
                                            )}
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6">
                                            {listFile.length > 0 && (
                                                <>
                                                    <Paper className="table marginTop20">
                                                        <TableContainer>
                                                            <Table className="backgroundMint">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell><span className="bold">STT</span></TableCell>
                                                                        <TableCell><span className="bold">File Name</span></TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    {Array.from(listFile).map(f => (
                                                                        <TableRow >
                                                                            <TableCell>{count++}</TableCell>
                                                                            <TableCell>{f.name}</TableCell>
                                                                        </TableRow>
                                                                    ))}
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>
                                                    </Paper>
                                                    <div className="btnUpload">
                                                        <div className="positionRelative">
                                                            <button className="btn height40" onClick={handleUploadListFile}>Upload List Files</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
            <Footer />
        </>
    )
}