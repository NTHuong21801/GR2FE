import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormEvaluate from "./FormEvaluate";
import ApiService from "../../service/service";
import ExportFile from "../component/ExportFile";
import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from '../topbar/Topbar';
import DrawerHeader from "../component/DrawerHeader";
import { useState } from "react";
import Loading from "../component/Loading";
import Noti from "../component/Noti";
export default function CreateEvaluate() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [noti, setNoti] = useState(false);
    const handCloseNoti = () => {
        setNoti(false)
    }
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const exportExcelFile = async (myData) => {
        const fileType = "EXCEL_EVALUATE";
        setLoading(true)
        await ApiService.exportEvaluate(myData, fileType)
            .then(res => {
                ExportFile.downloadExcelFromBase64(res.base64, res.fileName);
                setLoading(false)
                setNoti(true);
            })
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
                    <FormEvaluate handleExportExcelFile={exportExcelFile} />
                </Box>
            </Box>

            <Footer />
        </>
    )
}