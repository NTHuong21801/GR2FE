import 'bootstrap/dist/css/bootstrap.min.css';
import './evaluate.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApiService from '../../service/service';
export default function Evaluate() {
    const [excel, setExcel] = useState([]);
    useEffect(() => {
        const data = {
            "emailTeacher": localStorage.getItem("email"),
            "excelType": "EXCEL_EVALUATE"
        }
        ApiService.getExcelType(data)
            .then(res => {
                setExcel(res);
            })
    }, [])
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="evaluateHeader row">
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <Link to='/createEvaluate' className="textNone">
                                <div className="btn">
                                    Tạo phiếu đánh giá ĐATN
                                    <img src="assets/icon/writing.png" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-4 search">
                            <input type="text" placeholder="Tìm kiếm theo tên hoặc MSSV" />
                            <img src="assets/icon/search.png" alt="" />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
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