
import { useForm } from "react-hook-form";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import ApiService from "../../service/service";
import Loading from "../component/Loading";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./upload.css";
export default function UploadFile() {
    const [loading, setLoading] = useState(false);
    const [students, setStudents] = useState([]);
    const [typeFile, setTypeFile] = useState('');
    const [listFile, setListFile] = useState({});
    const handleChange = (event) => {
        setTypeFile(event.target.value);
    };
    useEffect(() => {
        const email = localStorage.getItem("email");
        ApiService.getStudentByTeacherEmail(email)
            .then(data => {
                setStudents(data.body.listStudents);
            })
    }, [])
    const handleFileChange = (event) => {
        const files = event.target.files;
        setListFile(files);
    }
    var count = 1;
    const handleUploadListFile = async () => {
        if (listFile && typeFile) {
            setLoading(true);
            const formData = new FormData();
            Array.from(listFile).forEach(file => {
                formData.append('file', file); // Chú ý key 'files' ở đây
            });
            try {
                const json = await ApiService.readFileToDB(formData, typeFile);
                console.log(json);
            } catch (e) {
                console.error(e)
            }
            Array.from(listFile).forEach(file => {
                ApiService.generateFileUrl();
                const formData1 = new FormData();
                formData1.append('file', file);
                
            });
            setLoading(false);
            alert("Upload file successfully");
            if(typeFile == "EXCEL_DIVIDE"){
                window.location.href = "divide";
            }else if(typeFile == "EXCEL_EVALUATE"){
                window.location.href = "evaluate";
            }else if(typeFile == "EXCEL_DEBATE"){
                window.location.href = "debate";
            }
        }
    }
    return (
        <>
            {loading && <Loading />}
            <Header />
            <div className="main">
                <div className="container">
                    <div className="checkBlock marginTop20">
                        <div className="formHeader">
                            UPLOAD FILE
                        </div>
                        {/* <div className="infoHeader">
                    </div> */}
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
                                            <MenuItem value="EXCEL_DEBATE">Phản biện ĐATN</MenuItem>
                                            <MenuItem value="EXCEL_DIVIDE">Phân công nhiệm vụ ĐATN</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
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
            <Footer />
        </>
    )
}