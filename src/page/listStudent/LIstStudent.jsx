/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from "../../service/service";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import "./list.css"
import PopupFile from "./PopupFile";
import PopupReport from "./PopupReport";
import ExportFile from "../component/ExportFile";
import PopupImport from "./PopupImport";
export default function ListStudent() {
    const [list, setList] = useState();
    const [isPopupFile, setIsPopupFile] = useState(false);
    const [isPopupReport, setIsPopupReport] = useState(false);
    const [isPopupImport, setIsPopupImport] = useState(false);
    const [listExcel, setListExcel] = useState();
    const [report, setReport] = useState();
    const email = localStorage.getItem('email');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ApiService.getStudentByTeacher(email);
                console.log(res.body);
                setList(res.body);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])
    const handleClosePopupFile = () => {
        setIsPopupFile(false);
    }
    const handleOpenPopupFile = (data) => {
        console.log(data);
        setIsPopupFile(true);
        setListExcel(data);
    }
    const handleClosePopupImport = () => {
        setIsPopupImport(false);
    }
    const handleOpenPopupImport = (data) => {
        setIsPopupImport(true);
    }
    const handleClosePopupReport = () => {
        setIsPopupReport(false);
    }
    const handleOpenPopupReport = (data) => {
        setIsPopupReport(true);
        setReport(data);
    }
    var count = 1;
    const handleExportAll = () => {
        if(list){
            ExportFile.writeDataToListFile(list);
        }
    }
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="btn col-md-2" onClick={handleOpenPopupImport}>
                            Import Student List
                        </div>
                        <div className="col-md-1"></div>
                        <div className="btn col-md-2" onClick={handleExportAll}>
                            Export Student List
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Paper className="table marginTop20">
                                <TableContainer>
                                    <Table className="backgroundMint">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>STT</TableCell>
                                                <TableCell>Sinh viên</TableCell>
                                                <TableCell>Hệ</TableCell>
                                                <TableCell>Mã lớp / Học phần</TableCell>
                                                <TableCell>Báo cáo</TableCell>
                                                <TableCell>Tên đề tài</TableCell>
                                                <TableCell>GV đồng ý bảo vệ</TableCell>
                                                <TableCell>GVHD</TableCell>
                                                <TableCell>Điểm GVHD</TableCell>
                                                <TableCell>Điểm QT</TableCell>
                                                <TableCell>Điểm CK</TableCell>
                                                <TableCell>Hội đồng / GVPB</TableCell>
                                                <TableCell>File</TableCell>
                                                <TableCell>Ghi chú</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {list != null && list.map(s => (
                                                <TableRow key={s.studentId}>
                                                    <TableCell>{count++}</TableCell>
                                                    <TableCell>{s.studentName} - {s.mssv}</TableCell>
                                                    <TableCell>{s.studentMajor}</TableCell>
                                                    <TableCell>
                                                        {
                                                            <>
                                                                <p className="listFile">{s.classCode} - {s.courseId}</p>
                                                                <p className="listFile">{s.topicName}</p>
                                                            </>
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        {<p className="listFile" onClick={() => handleOpenPopupReport(s.report)}>File</p>}
                                                        {isPopupReport && <PopupReport onClose={handleClosePopupReport} data={report}/>}
                                                    </TableCell>
                                                    <TableCell>{s.topicName}</TableCell>
                                                    <TableCell>
                                                        {
                                                            <select value={s.studentStatus} className="selectStatus">
                                                                <option value="">N/A</option>
                                                                <option value="APPROVE">Đồng ý</option>
                                                                <option value="REJECT">Không đồng ý</option>
                                                            </select>
                                                        }
                                                    </TableCell>
                                                    <TableCell>{s.teacherName}</TableCell>
                                                    <TableCell><p className="colorBlue">{s.teacherPoint}</p></TableCell>
                                                    <TableCell><p className="colorBlue">{s.midtermPoint}</p></TableCell>
                                                    <TableCell><p className="colorBlue">{s.finalPoint}</p></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell>
                                                        {<p className="listFile" onClick={() => handleOpenPopupFile(s.excelFileList)}>File</p>}
                                                        {isPopupFile && listExcel && <PopupFile onClose={handleClosePopupFile} data = {listExcel}/>}
                                                    </TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>
            {isPopupImport && <PopupImport onClose={handleClosePopupImport}/>}
            <Footer />
        </>
    )
}