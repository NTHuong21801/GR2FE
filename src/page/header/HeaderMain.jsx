import { Link } from "react-router-dom";
import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function HeaderMain() {
    return (
        <div className="header">
            <div className="headerTop">
                <div className="header-left">
                    <img src="assets/img/logoBK.png" alt="" />
                </div>
                <div className="header-right">
                    <div className="headerSearch">
                        <div className="searchInfo">
                            <input type="text" name="" id="" placeholder="Tìm kiếm" />
                            <img src="assets/icon/search.png" alt="" className="searchIcon" />
                        </div>
                        <div className="headerBtn">
                            <Link to={'/login'} className="textNone1">
                                <div className="btn">Đăng nhập</div>
                            </Link>
                            <Link to={'/signup'} className="textNone1">
                                <div className="btn">Đăng ký</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerBottom">
                <div className="headerList">
                    <span>Trang chủ</span>
                    <span>Thông báo</span>
                    <span>Quy định</span>
                    <span>Sổ tay</span>
                    <span>Dịch vụ</span>
                    <span>Nhập học</span>
                    <span>Tra cứu</span>
                    <span>Liên hệ</span>
                </div>
            </div>
        </div>
    )
}