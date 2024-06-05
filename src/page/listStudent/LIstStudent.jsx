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
export default function ListStudent() {
    const [list, setList] = useState();
    const [isPopupFile, setIsPopupFile] = useState(false);
    const [isPopupImport, setIsPopupImport] = useState(false);
    const [listExcel, setListExcel] = useState();
    const [currentPage, setCurrentPage] = React.useState(0);
    const email = localStorage.getItem('email');
    const handlePageChange = (page) => {
        console.log(page)
        setCurrentPage(page);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ApiService.getStudentByTeacherPaginate(email, currentPage);
                console.log(res);
                setList(res);
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
    var count = 1;
    const handleExportAll = async () => {
        try {
            const res = await ApiService.getStudentByTeacherEmail(email);
            ExportFile.writeDataToListFile(res.body);
        } catch (err) {
            console.log(err);
        }
    }
    const [open, setOpen] = React.useState(false);
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
    return (
        <>
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
                                    <h2><strong>Danh sách sinh viên</strong></h2>
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
                                                        <TableCell>STT</TableCell>
                                                        <TableCell>Sinh viên</TableCell>
                                                        <TableCell>Lớp sinh viên</TableCell>
                                                        <TableCell>Mã lớp / Học phần</TableCell>
                                                        <TableCell>Tên đề tài</TableCell>
                                                        <TableCell>GV đồng ý bảo vệ</TableCell>
                                                        <TableCell>GVHD</TableCell>
                                                        <TableCell>Điểm GVHD</TableCell>
                                                        <TableCell>Điểm QT</TableCell>
                                                        <TableCell>Điểm CK</TableCell>
                                                        <TableCell>Hội đồng / GVPB</TableCell>
                                                        <TableCell>File</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {list != null && list.studentResponseList.map(s => (
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
                                                            <TableCell><p className="colorBlue">{s.teacherPoint}</p></TableCell>
                                                            <TableCell><p className="colorBlue">{s.midtermPoint}</p></TableCell>
                                                            <TableCell><p className="colorBlue">{s.finalPoint}</p></TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>
                                                                {<p className="listFile" onClick={() => handleOpenPopupFile(s.excelFileList)}>File</p>}
                                                                {isPopupFile && listExcel && <PopupFile onClose={handleClosePopupFile} data={listExcel} />}
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
            {/* <Footer /> */}
        </>
    )
}