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
import ExportFile from '../component/ExportFile';
import Loading from '../component/Loading';
import Noti from '../component/Noti';
export default function CreateDivide() {
    const [loading, setLoading] = useState(false);
    const [noti, setNoti] = useState(false);
    const handCloseNoti = () => {
        setNoti(false)
    }
    const exportExcelFile = async (myData) => {
        const fileType = "EXCEL_DIVIDE";
        console.log(myData);
        setLoading(true)
        await ApiService.exportEvaluate(myData, fileType)
            .then(res => {
                ExportFile.downloadExcelFromBase64(res.base64, res.fileName);
                setLoading(false)
                setNoti(true);
            })
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
            {loading && <Loading />}
            {noti && <Noti onCloseNoti={handCloseNoti} mess={"File đã được download thành công!"}/>}
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