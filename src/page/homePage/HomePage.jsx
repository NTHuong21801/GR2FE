import 'bootstrap/dist/css/bootstrap.min.css';
import './homePage.css'
import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
import { useState } from 'react';
import Footer from '../footer/Footer';
export default function HomePage(){
    const [open, setOpen] = useState(true);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
                <Topbar open={open} handleOpen={handleDrawerOpen} />
                <MiniDrawer open={open} handClose={handleDrawerClose} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <div className='main'>
                        <h2>Hệ thống sinh và quản lý các phiếu trong bảo về đồ án tốt nghiệp</h2>
                        <h4>Hệ thống này tập trung vào việc quản lý và sinh các phiếu bảo vệ đồ án tốt nghiệp cho sinh viên.</h4>
                        <br />
                        <ul className='listStyleNumber'>
                            <li><strong>Để tạo hàng loạt phiếu giảng viên có thể thực hiện các bước sau đây:</strong>
                                <ul className='gap10'>
                                    <li>Bước 1: Nhấn vào icon Generate File trên thanh SideBar</li>
                                    <li>
                                        Bước 2: Upload đủ 3 file: DSSV, file excel template và file Json mapping:
                                        <img src='assets/img/generateFile.png'className='imgEx'/>
                                    </li>
                                    <li>
                                    <p>Giảng viên có thể xem chú thích rõ hơn khi nhấn vào biểu tượng chú thích bên phải tiêu đề <strong>Generate File</strong></p>
                                    </li>
                                </ul>
                            </li>
                            <li><strong>Để upload hàng loạt phiếu giảng viên có thể thực hiện các bước sau đây:</strong>
                                <ul className='gap10'>
                                    <li>Bước 1: Nhấn vào icon Upload File trên thanh SideBar</li>
                                    <li>
                                        Bước 2: Giảng viên cần chọn loại file cần upload và file Json ứng với dạng file cần upload đó. Nếu chọn dạng "Phiếu khác", giảng 
                                        viên cần chọn MSSV phù hợp ứng với file đó.
                                        <img src='assets/img/upFile.png'className='imgEx'/>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Box>
            </Box>
            <Footer />
        </>
    )
}