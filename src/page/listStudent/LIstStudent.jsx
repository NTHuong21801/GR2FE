/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from "../../service/service";
import PopupExport from "./PopupExport";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import "./list.css"
import PopupFile from "./PopupFile";
import PopupReport from "./PopupReport";
export default function ListStudent() {
    const [list, setList] = useState();
    const [isPopup, setIsPopup] = useState(false);
    const [isPopupFile, setIsPopupFile] = useState(false);
    const [isPopupReport, setIsPopupReport] = useState(false);
    const [listExcel, setListExcel] = useState();
    const [report, setReport] = useState();
    const [teacher, setTeacher] = useState();
    const email = localStorage.getItem('email');
    const handleClosePopup = () => {
        setIsPopup(false);
    }
    const handleOpenPopup = () => {
        setIsPopup(true)
    }
    const handleClosePopupFile = () => {
        setIsPopupFile(false);
    }
    const handleOpenPopupFile = (data) => {
        setIsPopupFile(true);
        setListExcel(data);
    }
    const handleClosePopupReport = () => {
        setIsPopupReport(false);
    }
    const handleOpenPopupReport = (data) => {
        setIsPopupReport(true);
        setReport(data);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ApiService.getStudentByTeacher(email);
                setTeacher(res.body);
                setList(res.body.listStudents);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])
    var count = 1;
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9"></div>
                        <div className="btn col-md-2" onClick={handleOpenPopup}>
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
                                                <TableCell>Lĩnh vực chuyên môn</TableCell>
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
                                                    <TableCell></TableCell>
                                                    <TableCell>
                                                        {
                                                            <select value={s.studentStatus} className="selectStatus">
                                                                <option value="">N/A</option>
                                                                <option value="APPROVE">Đồng ý</option>
                                                                <option value="REJECT">Không đồng ý</option>
                                                            </select>
                                                        }
                                                    </TableCell>
                                                    <TableCell>{teacher.teacherName}</TableCell>
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
            <Footer />
            {isPopup && <PopupExport onClose={handleClosePopup} />}
        </>
    )
}