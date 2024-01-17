import { useEffect, useState } from "react";
import ApiService from "../../service/service";
import Footer from "../footer/Footer";

export default function Student() {
    const handleLogout = () => {
        const shouldDelete = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
        if (shouldDelete) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('roleId');
            localStorage.removeItem('accountId');
            localStorage.removeItem('email');
            localStorage.removeItem('status');
            window.location.reload();
        }
    }
    const [excel, setExcel] = useState([]);
    useEffect(() => {
        ApiService.getExcelByAccount()
            .then(res => {
                setExcel(res);
            })
    }, [])
    return (
        <>
            <div className="header">
                <div className="headerTop">
                    <div className="header-left">
                        <img src="assets/img/logoBK.png" alt="" />
                    </div>
                    <div className="header-right">
                        <div className="headerSearch">

                            <div className="btn" onClick={() => handleLogout()}>Đăng xuất</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="studentBody container">
                    <div className="evaluateBottom row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 row">
                            {excel && excel.map(e => (
                                <div key={e.excelId} className="col-md-5 evaluateFile">
                                    <img src="assets/icon/excel.png" alt="" className='excelIcon' />
                                    <span>{e.excelName}</span>
                                    <a href={e.excelUrl} download className="btn">
                                        Download
                                        <img src="assets/icon/download.png" alt="" />
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}