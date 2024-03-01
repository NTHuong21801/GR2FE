/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import ApiService from "../../service/service";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
export default function PopupExport({ onClose }) {
    const [typeFile, setTypeFile] = useState('');
    const [searchText, setSearchText] = useState();
    const [checkboxState, setCheckboxState] = useState({});
    const handleChange = (event) => {
        setTypeFile(event.target.value);
    };
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
        const selectedList = [];
        if(list){
            selectedStudentIds.forEach(s => {
                console.log(s)
                const check = list.filter(l => l.studentId == s );
                selectedList.push(check);
            })
        }
        console.log(selectedList);
        console.log(typeFile);
    }
    return (
        <div className="popupTable">
            <div className="popup-content">
                <div className="popup-header">
                    <p>Danh sách sinh viên</p>
                </div>
                <div className="popup-body">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Dạng file</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={typeFile}
                            label="Dạng file"
                            onChange={handleChange}
                        >
                            <MenuItem value="evaluate">Đánh giá ĐATN</MenuItem>
                            <MenuItem value="debate">Phản biện ĐATN</MenuItem>
                            <MenuItem value="divide">Phân công nhiệm vụ ĐATN</MenuItem>
                        </Select>
                    </FormControl>
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
                    <div className="btn">Export All</div>
                </div>
            </div>
        </div>
    )
}