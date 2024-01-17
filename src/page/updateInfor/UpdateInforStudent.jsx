/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/service";

export default function UpdateInforStudent() {
    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm();
    const [schools, setSchools] = useState([]);
    const [majors, setMajors] = useState([]);
    const [teacher, setTeacher] = useState([]);
    const [grade, setGrade] = useState([]);
    const schoolValue = useWatch({ control, name: 'school' });
    const majorValue = useWatch({ control, name: 'major' });
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ApiService.getAllSchool();
                setSchools(res);
                const res1 = await ApiService.getAllTeacher();
                setTeacher(res1);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (schoolValue) {
                    const res = await ApiService.getMajorBySchoolId(schoolValue);
                    setMajors(res);
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [schoolValue]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (majorValue) {
                    const res = await ApiService.getClassByMajorId(majorValue);
                    setGrade(res);
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [majorValue]);
    const onSubmit = async (d) => {
        try {
            const data = {
                "studentEmail": localStorage.getItem("email"),
                "studentName": d.name,
                "studentPhone": d.phone,
                "studentMajor": parseInt(d.major),
                "teacherId": parseInt(d.teacher),
                "mssv": d.mssv,
                "classId": parseInt(d.grade)
            }
            await ApiService.updateStudentInfo(data);
            alert("Update thành công");
            navigate("/studentPage");
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="main">
                <div className="updatePage">
                    <div className="update">
                        <p className="updateHeader">
                            Cập nhật thông tin cá nhân
                        </p>
                        <div className="infoDetail">
                            <label>Họ và tên: </label>
                            <input type="text" {...register("name", { required: "This field is required" })} placeholder='Họ và tên' className={errors.name ? 'validateInput' : ''} />
                        </div>
                        <div className="infoDetail">
                            <label>MSSV: </label>
                            <input type="text" {...register("mssv", { required: "This field is required" })} placeholder='MSSV' className={errors.name ? 'validateInput' : ''} />
                        </div>
                        {errors.name && <p className='validatePass'>{errors.name.message}</p>}
                        <div className="infoDetail">
                            <label>Số điện thoại: </label>
                            <input type="tel" {...register("phone", { required: "This field is required" })} placeholder='Số điện thoại' className={errors.name ? 'validateInput' : ''} />
                        </div>
                        <div className="infoDetail">
                            <label>Giáo viên hướng dẫn: </label>
                            <select
                                {...register("teacher", { required: true })}
                            >
                                <option value="">Select an option</option>
                                {teacher && teacher.map(t => (
                                    <option value={t.teacherId} key={t.teacherId}>{t.teacherName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="infoDetail">
                            <label>Trường: </label>
                            <select
                                {...register("school")}
                            >
                                <option value="">Select an option</option>
                                {schools && schools.map(s => (
                                    <option value={s.schoolId} key={s.schoolId}>{s.schoolName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="infoDetail">
                            <label>Khoa - viện: </label>
                            <select {...register("major")}>
                                <option value="">Select an option</option>
                                {majors && majors.map(m => (
                                    <option value={m.majorId} key={m.majorId}>{m.majorName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="infoDetail">
                            <label>Lớp: </label>
                            <select {...register("grade")}>
                                <option value="">Select an option</option>
                                {grade.classList && grade.classList.map(g => (
                                    <option value={g.classId} key={g.classId}>{g.className}</option>
                                ))}
                            </select>
                        </div>
                        <div className="btnSave">
                            <button className="btn">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}