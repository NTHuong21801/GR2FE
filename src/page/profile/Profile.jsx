import 'bootstrap/dist/css/bootstrap.min.css';
import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
import Footer from '../footer/Footer';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import ApiService from '../../service/service';
const Search = styled('div')({
    position: 'relative',
    borderRadius: '4px',
    marginRight: '16px',
    marginLeft: '0',
    width: '90%',
    border: 'solid 1px #ccc'
});
export default function Profile(){
    const [teacher, setTeacher] = useState();
    const [open, setOpen] = useState(true);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await ApiService.getTeacherByAccount(localStorage.getItem('accountId'));
                setTeacher(res.body);
            }catch(e){
                console.log(e)
            }
        }
        fetchData();
    }, [])
    return(
        <>
         <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Topbar open={open} handleOpen={handleDrawerOpen} />
                <MiniDrawer open={open} handClose={handleDrawerClose} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <div className='main'>
                        <h3 className='profileTitle'>Thông tin giảng viên</h3>
                        {teacher && 
                        <>
                            <div className='profile'>
                                <label htmlFor="">Họ và tên:</label>
                                <input value={teacher.teacherName} disabled/>
                            </div>
                            <div className='profile'>
                                <label htmlFor="">Email:</label>
                                <input value={teacher.teacherEmail} disabled/>
                            </div>
                            <div className='profile'>
                                <label htmlFor="">SĐT liên hệ:</label>
                                <input value={teacher.teacherPhone} disabled/>
                            </div>
                            <div className='profile'>
                                <label htmlFor="">Trực thuộc:</label>
                                <input value={teacher.locatedName} disabled/>
                            </div>
                            <div className='profile'>
                                <label htmlFor="">Trường:</label>
                                <input value={teacher.schoolName} disabled/>
                            </div>
                        </>}
                    </div>
                </Box>
            </Box>
            <Footer />
        </>
    )
}