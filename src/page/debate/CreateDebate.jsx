import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDebate from "./FormDebate";

export default function CreateDebate() {
    const exportExcelFile = (myData) => {
       console.log(myData)
    }
    return (
        <>
            <Header />
            <FormDebate handleExportExcelFile={exportExcelFile} />
            <Footer />
        </>
    )
}