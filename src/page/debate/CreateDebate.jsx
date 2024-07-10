import Footer from "../footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import FormDebate from "./FormDebate";
import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
import { useState } from "react";
import Loading from "../component/Loading";
import ExportFile from "../component/ExportFile";
import ApiService from "../../service/service";
import Noti from "../component/Noti";
import { useSelector } from "react-redux";
export default function CreateDebate() {
    const [loading, setLoading] = useState(false);
    const [noti, setNoti] = useState(false);
    const handCloseNoti = () => {
        setNoti(false)
    }
    const token = useSelector((state) => state.accessToken);
    const exportExcelFile = async (myData) => {
        const fileType = "EXCEL_DEBATE";
        setLoading(true)
        await ApiService.exportEvaluate(myData, fileType, token)
            .then(res => {
                ExportFile.downloadExcelFromBase64(res.base64, res.fileName);
                setLoading(false)
                setNoti(true);
            })
    }
    const [open, setOpen] = useState(true);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    return (
        <>
        {noti && <Noti onCloseNoti={handCloseNoti} mess={"File đã được download thành công!"}/>}
        {loading && <Loading />}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Topbar open={open} handleOpen={handleDrawerOpen} />
                <MiniDrawer open={open} handClose={handleDrawerClose} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <FormDebate handleExportExcelFile={exportExcelFile} />
                </Box>
            </Box>
            <Footer />
        </>
    )
}