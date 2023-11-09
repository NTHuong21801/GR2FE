import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormEvaluate from "./FormEvaluate";
export default function CreateEvaluate() {
    const exportExcelFile = (mydata) => {
        console.log(mydata)
    }
    return (
        <>
            <Header />
            <FormEvaluate handleExportExcelFile={exportExcelFile}/>
            <Footer />
        </>
    )
}