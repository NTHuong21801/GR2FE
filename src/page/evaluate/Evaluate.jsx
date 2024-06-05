import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import ApiService from '../../service/service';
import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
const Search = styled('div')({
    position: 'relative',
    borderRadius: '4px',
    marginRight: '16px',
    marginLeft: '0',
    width: '90%',
    border: 'solid 1px #ccc'
});
export default function Divide() {
    const [excel, setExcel] = useState([]);
    const [text, setText] = useState();
    const fetchData = async () => {
        try {
            const data = {
                "emailTeacher": localStorage.getItem("email"),
                "excelType": "EXCEL_EVALUATE"
            }
            const res = await ApiService.getExcelType(data);
            setExcel(res);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    const [open, setOpen] = useState(false);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    var count = 1;

    const handleSearchChange = (event) => {
        setText(event.target.value);
    }
    const filter = excel != null ? excel.filter((e) => {
        return (
            e.excelName.toLowerCase().includes(text) ||
            e.mssv.toLowerCase().includes(text)
        );
    }) : [];
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
                            <h2><strong>Đánh giá đồ án tốt nghiệp</strong></h2>
                            <div className='row marginTop20'>
                                <div className='col-md-3'>
                                    <Link className='textNone' to='/createEvaluate'>
                                        <div className="btn">
                                            Tạo phiếu đánh giá ĐATN
                                            <img src="assets/icon/writing.png" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-5"></div>
                                <div className="col-md-4">
                                    <Search>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                        <InputBase
                                            placeholder="Search by name or mssv"
                                            value={text}
                                            onChange={handleSearchChange}
                                        />
                                    </Search>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-md-12'>
                                    <Paper className="table marginTop20">
                                        <TableContainer>
                                            <Table className="backgroundMint">
                                                <TableHead className="positionFix">
                                                    <TableRow>
                                                        <TableCell>STT</TableCell>
                                                        <TableCell>Họ và tên</TableCell>
                                                        <TableCell>MSSV</TableCell>
                                                        <TableCell>FileName</TableCell>
                                                        <TableCell>Link</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {text != null ? (
                                                        filter != null && filter.map(s => (
                                                            <TableRow key={s.excelId}>
                                                                <TableCell>{count++}</TableCell>
                                                                <TableCell>{s.studentName}</TableCell>
                                                                <TableCell>{s.mssv}</TableCell>
                                                                <TableCell>
                                                                    {s.excelName}
                                                                </TableCell>
                                                                <TableCell>
                                                                    <a href={s.excelUrl} download className="listFile">
                                                                        File
                                                                        <img src="assets/icon/download.png" alt="" />
                                                                    </a>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))
                                                    ) : (
                                                        excel != null && excel.map(s => (
                                                            <TableRow key={s.excelId}>
                                                                <TableCell>{count++}</TableCell>
                                                                <TableCell>{s.studentName}</TableCell>
                                                                <TableCell>{s.mssv}</TableCell>
                                                                <TableCell>
                                                                    {s.excelName}
                                                                </TableCell>
                                                                <TableCell>
                                                                    <a href={s.excelUrl} download className="listFile">
                                                                        File
                                                                        <img src="assets/icon/download.png" alt="" />
                                                                    </a>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>

            {/* <Footer /> */}
        </>
    )
}