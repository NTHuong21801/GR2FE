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
export default function CreateEvaluate() {
    const [open, setOpen] = useState(false);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const exportExcelFile = async (myData) => {
        await ApiService.exportEvaluate(myData)
            .then(res => {
                ExportFile.downloadExcelFromBase64(res.base64, res.fileName);
            })
    }
    return (
        <>
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