import Footer from "../footer/Footer";
import HeaderMain from "../header/HeaderMain";

export default function MainPage(){
    return(
        <>
            <HeaderMain />
            <div className="main">
                <div className="mainPage"></div>
            </div>
            <Footer />
        </>
    )
}