/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from "../../service/service";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import "./list.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PopupFile from "./PopupFile";
import ExportFile from "../component/ExportFile";
import PopupImport from "./PopupImport";
import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
import DeleteIcon from '@mui/icons-material/Delete';
import PopupConfirm from "../component/PopupConfirm";
import Footer from "../footer/Footer";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PopupAnotation from "../component/PopupAnotation";
import Noti from "../component/Noti";
export default function ListStudent() {
    const [student, setStudent] = useState();
    const [list, setList] = useState();
    const [isPopupFile, setIsPopupFile] = useState(false);
    const [isPopupImport, setIsPopupImport] = useState(false);
    const [listExcel, setListExcel] = useState();
    const [studentSelected, setStudentSelected] = useState();
    const [confirm, setConfirm] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const email = localStorage.getItem('email');
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ApiService.getStudentByTeacherPaginate(email, currentPage);
                setList(res);
                setStudent(res.studentResponseList);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [currentPage])
    const handleClosePopupFile = () => {
        setIsPopupFile(false);
    }
    const handleOpenPopupFile = (data) => {
        setIsPopupFile(true);
        setListExcel(data);
    }
    const handleClosePopupImport = () => {
        setIsPopupImport(false);
    }
    const handleOpenPopupImport = (data) => {
        setIsPopupImport(true);
    }
    var count = 1;
    const handleExportAll = async () => {
        try {
            const res = await ApiService.getStudentByTeacherEmail(email);
            ExportFile.writeDataToListFile(res.body);
        } catch (err) {
            console.log(err);
        }
    }
    const [open, setOpen] = React.useState(true);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleChangeStatus = async (event, id) => {
        var status = event.target.value;
        try {
            const res = await ApiService.updateStatus(id, status);
            setList(res);
        } catch (err) {
            console.log(err);
        }
        window.location.reload();
    }
    const handleCloseConfirm = () => {
        setConfirm(false);
    }
    const handleDelete = (id) => {
        setStudentSelected(id);
        setConfirm(true);
    }
    const handleDeleteStudent = async () => {
        if (studentSelected) {
            try {
                const res = await ApiService.deleteStudent(studentSelected);
                if (res.responseCode == '200') {
                    setList(student.filter(student => student.id !== studentSelected));
                    setConfirm(false);
                }else {
                    setNoti(true);
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
    const [ano, setAno] = useState(true);
    const handlePopupAno = () => {
        setAno(true);
    }
    const handCloseAno = () => {
        setAno(false);
    }
    const [noti, setNoti] = useState(false);
    const handCloseNoti = () => {
        setNoti(false)
    }
    return (
        <>
            {noti && <Noti onCloseNoti={handCloseNoti} mess={"Xảy ra lỗi trong quá trình xoá sinh viên!"} />}
            {ano && <PopupAnotation onClose={handCloseAno} />}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Topbar open={open} handleOpen={handleDrawerOpen} />
                <MiniDrawer open={open} handClose={handleDrawerClose} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>
                                        <strong>
                                            Danh sách sinh viên
                                            <AnnouncementIcon className="announIcon" onClick={handlePopupAno} />
                                        </strong>
                                    </h2>
                                </div>
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
                                                <TableHead className="positionFix">
                                                    <TableRow>
                                                        <TableCell className="boldText">STT</TableCell>
                                                        <TableCell className="boldText">Sinh viên</TableCell>
                                                        <TableCell className="boldText">Lớp sinh viên</TableCell>
                                                        <TableCell className="boldText">Mã lớp / Học phần</TableCell>
                                                        <TableCell className="boldText">Tên đề tài</TableCell>
                                                        <TableCell className="boldText">GV đồng ý bảo vệ</TableCell>
                                                        <TableCell className="boldText">GVHD</TableCell>
                                                        <TableCell className="boldText">Điểm GVHD</TableCell>
                                                        <TableCell className="boldText">Điểm GVPB</TableCell>
                                                        <TableCell className="boldText">File</TableCell>
                                                        <TableCell className="boldText">Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {student != null && student.map(s => (
                                                        <TableRow key={s.studentId}>
                                                            <TableCell>{count++}</TableCell>
                                                            <TableCell>{s.studentName} - {s.mssv}</TableCell>
                                                            <TableCell>{s.className}</TableCell>
                                                            <TableCell>
                                                                {
                                                                    <>
                                                                        <p className="listFile">{s.classCode} - {s.courseId}</p>
                                                                    </>
                                                                }
                                                            </TableCell>
                                                            <TableCell>{s.topicName}</TableCell>
                                                            <TableCell>
                                                                {
                                                                    <select value={s.studentStatus} className="selectStatus" onChange={(e) => handleChangeStatus(e, s.studentId)}>
                                                                        <option value="">N/A</option>
                                                                        <option value="APPROVE">Đồng ý</option>
                                                                        <option value="REJECT">Không đồng ý</option>
                                                                    </select>
                                                                }
                                                            </TableCell>
                                                            <TableCell>{s.teacherName}</TableCell>
                                                            <TableCell><p className="colorBlue">{s.teacherEvaluatePoint}</p></TableCell>
                                                            <TableCell><p className="colorBlue">{s.teacherDebatePoint}</p></TableCell>
                                                            <TableCell>
                                                                {<p className="listFile" onClick={() => handleOpenPopupFile(s.excelFileList)}>File</p>}
                                                                {isPopupFile && listExcel && <PopupFile onClose={handleClosePopupFile} data={listExcel} />}
                                                            </TableCell>
                                                            <TableCell>
                                                                <DeleteIcon className="btn-delete" onClick={() => handleDelete(s.studentId)} />
                                                                {confirm && <PopupConfirm message={"Bạn có chắc chắn muốn xoá sinh viên này?"} onClose={handleCloseConfirm} handleDelete={handleDeleteStudent} />}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Paper>
                                    {list != null && (
                                        <div className="pagination">
                                            {currentPage > 0 && (
                                                <div onClick={() => handlePageChange(currentPage - 1)}>
                                                    <ArrowBackIosIcon className="paginationIcon" />
                                                </div>
                                            )}

                                            {Array.from({ length: list.totalPage }).map((_, index) => {
                                                if (
                                                    index === 0 || // Trang đầu tiên
                                                    index === currentPage || // Trang hiện tại
                                                    index === list.totalPage - 1 || // Trang cuối cùng
                                                    (index >= currentPage - 1 && index <= currentPage + 1) // 3 trang liền kề
                                                ) {
                                                    return (
                                                        <div
                                                            key={index}
                                                            onClick={() => handlePageChange(index)}
                                                            className={currentPage === index ? "active" : ""}
                                                        >
                                                            {index + 1}
                                                        </div>
                                                    );
                                                } else if (
                                                    index === currentPage - 2 || // Trang trước 2 trang hiện tại
                                                    index === currentPage + 2 // Trang sau 2 trang hiện tại
                                                ) {
                                                    return <div key={index}>...</div>; // Dấu ba chấm
                                                } else {
                                                    return null; // Trang không được hiển thị
                                                }
                                            })}

                                            {currentPage < list.totalPage - 1 && (
                                                <div onClick={() => handlePageChange(currentPage + 1)}>
                                                    <ArrowForwardIosIcon className="paginationIcon" />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
            {isPopupImport && <PopupImport onClose={handleClosePopupImport} />}
            <Footer />
        </>
    )
}