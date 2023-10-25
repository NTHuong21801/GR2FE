import 'bootstrap/dist/css/bootstrap.min.css';
import './evaluate.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
export default function Evaluate() {
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="evaluateHeader row">
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <div className="btn">
                                Tạo phiếu đánh giá ĐATN
                                <img src="assets/icon/writing.png" alt="" />
                            </div>
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
                                <img src="assets/icon/excel.png" alt="" className='excelIcon'/>
                                <span>Phiếu đánh giá ĐANT Nguyễn Thu Hương</span>
                                <div className="btn">
                                    Download
                                    <img src="assets/icon/download.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-5 evaluateFile">
                                <img src="assets/icon/excel.png" alt="" className='excelIcon'/>
                                <span>Phiếu đánh giá ĐANT Nguyễn Thu Hương</span>
                                <div className="btn">
                                    Download
                                    <img src="assets/icon/download.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-5 evaluateFile">
                                <img src="assets/icon/excel.png" alt="" className='excelIcon'/>
                                <span>Phiếu đánh giá ĐANT Nguyễn Thu Hương</span>
                                <div className="btn">
                                    Download
                                    <img src="assets/icon/download.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-5 evaluateFile">
                                <img src="assets/icon/excel.png" alt="" className='excelIcon'/>
                                <span>Phiếu đánh giá ĐANT Nguyễn Thu Hương</span>
                                <div className="btn">
                                    Download
                                    <img src="assets/icon/download.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-5 evaluateFile">
                                <img src="assets/icon/excel.png" alt="" className='excelIcon'/>
                                <span>Phiếu đánh giá ĐANT Nguyễn Thu Hương</span>
                                <div className="btn">
                                    Download
                                    <img src="assets/icon/download.png" alt="" />
                                </div>
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