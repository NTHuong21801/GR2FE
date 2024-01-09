import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
export default function Divide() {
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="evaluateHeader row">
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <Link className='textNone' to='/createDivide'>
                                <div className="btn">
                                    Tạo phiếu phân công nhiệm vụ
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
                            <div className="col-md-5 evaluateFile">
                                <img src="assets/icon/excel.png" alt="" className='excelIcon' />
                                <span>Phiếu phân công nhiệm vụ ĐANT Nguyễn Thu Hương</span>
                                <a href='https://xuhuong-storage.s3.ap-southeast-2.amazonaws.com/1704795728467-download.xlsx' download className="btn">
                                    Download
                                    <img src="assets/icon/download.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}