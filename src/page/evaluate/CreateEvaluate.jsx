import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormEvaluate from "./FormEvaluate";
import ApiService from "../../service/service";
import ExportFile from "../component/ExportFile";

export default function CreateEvaluate() {
    const exportExcelFile = async (myData) => {
        await ApiService.exportEvaluate(myData)
            .then(res => {
                ExportFile.downloadExcelFromBase64(res.base64, res.fileName);
            })
    }
    return (
        <>
            <Header />
            <FormEvaluate handleExportExcelFile={exportExcelFile}/>
            <Footer />
        </>
    )
}