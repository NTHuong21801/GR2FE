import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from "../../service/service";
export default function ListStudent() {
    const [list, setList] = useState();
    const email = localStorage.getItem('email');
    useEffect(() => {
        ApiService.getStudentByTeacher(email)
            .then(data => {
                setList(data.body.listStudents);
                console.log(data.body.listStudents);
            });
    }, [])
    var count = 1;
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="search">
                        <input type="text" placeholder="Tìm kiếm theo tên hoặc MSSV" />
                        <img src="assets/icon/search.png" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>MSSV</th>
                                        <th>Họ và tên</th>
                                        <th>Lớp</th>
                                        <th>Khoa - Viện</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list && list.map(s => (
                                        <tr key={s.studentId}>
                                            <td>{count++}</td>
                                            <td>{s.mssv}</td>
                                            <td>{s.studentName}</td>
                                            <td>{s.className}</td>
                                            <td>{s.studentMajor}</td>
                                        </tr>
                                    ))}

                                </tbody>

                            </table>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}