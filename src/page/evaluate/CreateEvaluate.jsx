import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormEvaluate from "./FormEvaluate";
import ApiService from "../../service/service";

export default function CreateEvaluate() {
    const exportExcelFile = async (myData) => {
        await ApiService.exportEvaluate(myData)
            .then(res => {
                const anchor = document.createElement("a");
                anchor.href = res;
                anchor.download = "Phiếu phân công nhiệm vụ ĐATN.xlsx";
                anchor.click();
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