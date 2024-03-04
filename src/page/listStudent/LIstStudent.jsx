/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from "../../service/service";
import PopupExport from "./PopupExport";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
export default function ListStudent() {
    const [list, setList] = useState();
    const [isPopup, setIsPopup] = useState(false);
    const email = localStorage.getItem('email');
    const handleClosePopup = () => {
        setIsPopup(false);
    }
    const handleOpenPopup = () => {
        setIsPopup(true)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ApiService.getStudentByTeacher(email);
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
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>STT</TableCell>
                                                <TableCell>Sinh viên</TableCell>
                                                <TableCell>Hệ</TableCell>
                                                <TableCell>Class</TableCell>
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
                                                    <TableCell>{s.className}</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
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