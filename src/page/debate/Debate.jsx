import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApiService from '../../service/service'
import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
export default function Debate() {
    const [excel, setExcel] = useState([]);
    const fetchData = async () => {
        try {
            const data = {
                "emailTeacher": localStorage.getItem("email"),
                "excelType": "EXCEL_DEBATE"
            }
            const res = await ApiService.getExcelType(data)
            setExcel(res);
        } catch (err) {
            console.log(err);
        }
    }
    const [open, setOpen] = useState(false);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    useEffect(() => {
        fetchData()
    }, [])
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
                            <div className="evaluateHeader row">
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                    <Link to='/createDebate' className='textNone'>
                                        <div className="btn">
                                            Tạo phiếu phản biện ĐATN
                                            <img src="assets/icon/writing.png" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-4 search">
                                    <input type="text" placeholder="Tìm kiếm theo tên hoặc MSSV" />
                                    <img src="assets/icon/search.png" alt="" />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="evaluateBottom row">
                                <div className="col-md-10 row">
                                    {excel && excel.map(e => (
                                        <div key={e.excelId} className="col-md-5 evaluateFile">
                                            <img src="assets/icon/excel.png" alt="" className='excelIcon' />
                                            <span>{e.excelName}</span>
                                            <a href={e.excelUrl} download className="btn">
                                                Download
                                                <img src="assets/icon/download.png" alt="" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
            <Footer />
        </>
    )
}