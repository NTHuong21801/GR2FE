import { Link } from "react-router-dom";
import "./header.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
    const [state, setState] = React.useState('divide');
    const handleClick = (item) => {
        setState(item);
    }
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
    return (
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
            <div className="headerBottom">
                <div className="container">
                    <div className="row">
                        <Link to={'/divide'} className={`col-md-2 textNone ${state === 'divide' ? 'activeHeaader' : ''}`} onClick={() => handleClick('divide')}>
                            <span>Phiếu giao nhiệm vụ</span>
                        </Link>
                        <Link to={'/evaluate'} className={`col-md-2 textNone ${state === 'evaluate' ? 'activeHeaader' : ''}`} onClick={() => handleClick('evaluate')}>
                            <span>Phiếu đánh giá ĐATN</span>
                        </Link>
                        <Link to={'/debate'} className={`col-md-2 textNone ${state === 'debate' ? 'activeHeaader' : ''}`} onClick={() => handleClick('debate')}>
                            <span>Phiếu phản biện ĐATN</span>
                        </Link>
                        <Link to={'/student'} className={`col-md-2 textNone ${state === 'student' ? 'activeHeaader' : ''}`} onClick={() => handleClick('student')}>
                            <span>Danh sách sinh viên</span>
                        </Link>
                        <Link to={'/upload'} className={`col-md-2 textNone ${state === 'student' ? 'activeHeaader' : ''}`} onClick={() => handleClick('student')}>
                            <span>Upload file</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}