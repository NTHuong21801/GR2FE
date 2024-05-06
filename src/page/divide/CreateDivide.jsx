/* eslint-disable no-unused-vars */
import Footer from '../footer/Footer'
import Header from '../header/Header'
import FormDivide from './FormDivide';
import './divide.css'
import React, { useEffect, useState } from "react";
import ApiService from '../../service/service';
import MiniDrawer from '../navbar/Navbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
export default function CreateDivide() {
    const [teacher, setTeacher] = useState();
    useEffect(() => {
        ApiService.getTeacherByAccount(localStorage.getItem('accountId'))
            .then(res => {
                setTeacher(res.body);
            })
    }, [])
    const exportExcelFile = (myData) => {
        if (teacher) {
            console.log(myData);
        }

    }
    const [open, setOpen] = useState(false);
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
                    <FormDivide handleExportExcelFile={exportExcelFile} />
                </Box>
            </Box>
            <Footer />
        </>
    )
}