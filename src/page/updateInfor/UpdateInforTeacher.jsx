/* eslint-disable no-unused-vars */
import { useForm, useWatch } from "react-hook-form";
import "./update.css"
import { useEffect, useState } from "react";
import ApiService from "../../service/service";
import { Navigate, useNavigate } from "react-router-dom";
export default function UpdateInforTeacher() {
    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm();
    const [schools, setSchools] = useState([]);
    const [majors, setMajors] = useState([]);
    const schoolValue = useWatch({ control, name: 'school' });
    const navigate = useNavigate();
    useEffect(() => {
        ApiService.getAllSchool()
            .then(data => {
                setSchools(data);
            });
    }, [])
    useEffect(() => {
        if (schoolValue) {
            ApiService.getMajorBySchoolId(schoolValue)
                .then(data => {
                    setMajors(data);
                })
                .catch(error => {
                    console.error('Error fetching majors:', error);
                });
        }
    }, [schoolValue]);
    const onSubmit = (d) => {
        const data = {
            "teacherEmail": localStorage.getItem("email"),
            "teacherName": d.name,
            "teacherPhone": d.phone,
            "schoolId": parseInt(d.school),
            "locatedId": parseInt(d.locate)
        }
        ApiService.updateTeacherInfo(data)
            .then((res) => {
                alert("Update thành công");
                navigate("/divide");
            })
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
                        {errors.name && <p className='validatePass'>{errors.name.message}</p>}
                        <div className="infoDetail">
                            <label>Số điện thoại: </label>
                            <input type="tel" {...register("phone", { required: "This field is required"  })} placeholder='Số điện thoại' className={errors.name ? 'validateInput' : ''} />
                        </div>
                        <div className="infoDetail">
                            <label>Đơn vị trực thuộc: </label>
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
                            <select {...register("locate")}>
                                <option value="">Select an option</option>
                                {majors && majors.map(m => (
                                    <option value={m.majorId} key={m.majorId}>{m.majorName}</option>
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