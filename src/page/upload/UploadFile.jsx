/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import ApiService from "../../service/service";

export default function UploadFile() {
    const { register, setValue, handleSubmit } = useForm();
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const email = localStorage.getItem("email");
        ApiService.getStudentByTeacherEmail(email)
            .then(data => {
                setStudents(data.body.listStudents);
            })
    }, [])
    const onSubmit = (d) => {
        ApiService.generateFileUrl();
        const formData = new FormData();
        formData.append('file', d.fileUrl[0])
        ApiService.getStudentById(d.student)
            .then((studentDataResponse) => {
                const studentData = studentDataResponse.body.studentName;
                return studentData;
            })
            .then((studentData) => {
                ApiService.getFileUrl(formData)
                    .then(data => {
                        const dataInput = {
                            "excelUrl": data.body.fileUrl,
                            "excelName": `${d.fileType} ${studentData}`,
                            "student": {
                                "studentId": d.student
                            }
                        }
                        return dataInput;
                    })
                    .then(dataInput => {
                        console.log(dataInput);
                        ApiService.createFile(dataInput)
                            .then(res => {
                                console.log(res);
                            })
                    })
            })

    }
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="formHeader">
                        UPLOAD FILE
                    </div>
                    <div className="infoHeader">
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row marginBottom20">
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <label>File Type:</label>
                            </div>
                            <div className="col-md-6">
                                <select className="inputInfo" {...register("fileType", { required: true })}>
                                    <option value="Phiếu đánh giá ĐATN">Phiếu đánh giá ĐATN</option>
                                    <option value="Phiếu giao nhiệm vụ ĐATN">Phiếu giao nhiệm vụ ĐATN</option>
                                    <option value="Phiếu phản biện ĐATN">Phiếu phản biện ĐATN</option>
                                </select>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row marginBottom20">
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <label>Upload file:</label>
                            </div>
                            <div className="col-md-6">
                                <input type="file" {...register("fileUrl", { required: true })} className='inputInfo' />
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row marginBottom20">
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <label>Student ID:</label>
                            </div>
                            <div className="col-md-6">
                                <select className="inputInfo" {...register("student", { required: true })}>
                                    <option value="">Select an option</option>
                                    {students && students.map(t => (
                                        <option value={t.studentId} key={t.studentId}>{t.mssv}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row btnUpload">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <button className="btn">Upload</button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}