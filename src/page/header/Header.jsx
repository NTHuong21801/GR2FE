/* eslint-disable no-const-assign */
import { Link } from "react-router-dom";
import "./header.css";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from "../../service/service";
export default function Header() {
    const [teacher, setTeacher] = useState();
    const email = localStorage.getItem('email');
    const currentURL = window.location.href;
    var state = currentURL.split("/")[3];
    if (state === "createDivide") {
        state = 'divide';
    }
    if (state === "createEvaluate") {
        state = 'evaluate';
    }
    if (state === "createDebate") {
        state = 'debate';
    }
    const handleLogout = () => {
        const shouldDelete = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
        if (shouldDelete) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('roleId');
            localStorage.removeItem('accountId');
            localStorage.removeItem('email');
            localStorage.removeItem('status');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('refreshExpiredTime');
            localStorage.removeItem('accessExpiredTime');
            window.location.reload();
        }
    }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await ApiService.getStudentByTeacher(email);
    //             console.log(res.body);
    //             setTeacher(res.body[0]);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchData();
    // }, )
    return (
        <div className="header">
            <div className="headerTop">
                <div className="header-left">
                    <img src="assets/img/logoBK.png" alt="" />
                </div>
                <div className="header-right">
                    <div className="headerSearch">
                        {/* {teacher && (
                            <div className="headerInfo">
                                <img src="assets/img/ava.jpg" alt="" className="ava" />
                                <div className="infor">
                                    <strong>Xin chào</strong>
                                    <span>{teacher.teacherName}</span>
                                    <span>{teacher.teacherEmail}</span>
                                </div>
                            </div>
                        )} */}
                        <div className="headerSearch">
                            <div className="btn" onClick={() => handleLogout()}>Đăng xuất</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerBottom">
                <div className="container">
                    <div className="row">
                        <Link to={'/divide'} className={`col-md-2 textNone ${state === 'divide' ? 'activeHeader' : ''}`} >
                            <span>Phiếu giao nhiệm vụ</span>
                        </Link>
                        <Link to={'/evaluate'} className={`col-md-2 textNone ${state === 'evaluate' ? 'activeHeader' : ''}`} >
                            <span>Phiếu đánh giá ĐATN</span>
                        </Link>
                        <Link to={'/debate'} className={`col-md-2 textNone ${state === 'debate' ? 'activeHeader' : ''}`} >
                            <span>Phiếu phản biện ĐATN</span>
                        </Link>
                        <Link to={'/student'} className={`col-md-2 textNone ${state === 'student' ? 'activeHeader' : ''}`} >
                            <span>Danh sách sinh viên</span>
                        </Link>
                        <Link to={'/genFile'} className={`col-md-2 textNone ${state === 'genFile' ? 'activeHeader' : ''}`} >
                            <span>Generate file</span>
                        </Link>
                        <Link to={'/upload'} className={`col-md-2 textNone ${state === 'upload' ? 'activeHeader' : ''}`} >
                            <span>Upload file</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}