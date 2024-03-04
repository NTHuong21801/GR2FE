/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import ApiService from "../../service/service";
import { Box, TextField } from "@mui/material";
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';

async function createEvaluateFile(student, teacher) {
    try{
        var lists = [];
        student.forEach(s => {
            const item = {
                "studentID": s.mssv,
                "studentName": s.studentName,
                "Email": s.studentEmail,
                "GVHD": teacher.teacherName,
                "Lớp": s.className
            }
            lists.push(JSON.stringify(item));
        })
        console.log(lists);
        const data = JSON.stringify({
            "json": lists
        });
        const res = await ApiService.writeDataToListFile(data);
        const anchor = document.createElement("a");
        anchor.href = res;
        anchor.download = "Danh sách sinh viên làm ĐATN.xlsx";
        anchor.click();
    }catch(e) {
        console.error(e);
    }
}
export default function PopupExport({ onClose }) {
    const [searchText, setSearchText] = useState();
    const [teacher, setTeacher] = useState();
    const [checkboxState, setCheckboxState] = useState({});
    const handleCheckboxChange = (event, studentId) => {
        const newState = { ...checkboxState };
        newState[studentId] = event.target.checked;
        setCheckboxState(newState);
    };
    const [list, setList] = useState();
    const email = localStorage.getItem('email');
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ApiService.getStudentByTeacher(email);
                const res1 = await ApiService.getTeacherByAccount(localStorage.getItem('accountId'))
                setTeacher(res1.body);
                setList(res.body.listStudents);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])
    const filterStudent = list != null ? list.filter((e) => {
        return (
            e.mssv.toLowerCase().includes(searchText)
        );
    }) : [];
    const getSelectedStudentIds = () => {
        const selectedStudentIds = Object.keys(checkboxState).filter(studentId => checkboxState[studentId]);
        return selectedStudentIds;
    };
    const handleExportFile = () => {
        const selectedStudentIds = getSelectedStudentIds();
        var selectedList = [];
        if (list  && teacher) {
            selectedStudentIds.forEach(s => {
                const check = list.filter(l => l.studentId == s);
                selectedList.push(check[0]);
            })
            createEvaluateFile(selectedList, teacher);
           
        }
    }
    const handleExportAll = (type) => {
        if(list && type && teacher){
           createEvaluateFile(list, teacher);
        }
    }
    return (
        <div className="popupTable">
            <div className="popup-content">
                <div className="popup-header">
                    <p>Danh sách sinh viên</p>
                </div>
                <div className="popup-body">
                    <Box
                        component="form"
                        fullWidth={true}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="Tìm kiếm theo MSSV"
                            variant="outlined"
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                    </Box>
                    <Paper className="table maxHeight300">
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>MSSV</TableCell>
                                        <TableCell>Student Name</TableCell>
                                        <TableCell>Class</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {searchText != null ? (
                                        filterStudent != null && filterStudent.map(s => (
                                            <TableRow key={s.studentId}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={checkboxState[s.studentId] || false}
                                                        onChange={(event) => handleCheckboxChange(event, s.studentId)}
                                                    />
                                                </TableCell>
                                                <TableCell>{s.mssv}</TableCell>
                                                <TableCell>{s.studentName}</TableCell>
                                                <TableCell>{s.className}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        list != null && list.map(s => (
                                            <TableRow key={s.studentId}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={checkboxState[s.studentId] || false}
                                                        onChange={(event) => handleCheckboxChange(event, s.studentId)}
                                                    />
                                                </TableCell>
                                                <TableCell>{s.mssv}</TableCell>
                                                <TableCell>{s.studentName}</TableCell>
                                                <TableCell>{s.className}</TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
                <div className="displayFlex popup-btn">
                    <div className="btn" onClick={onClose}>Đóng</div>
                    <div className="btn" onClick={handleExportFile}>Export</div>
                    <div className="btn" onClick={handleExportAll}>Export All</div>
                </div>
            </div>
        </div>
    )
}