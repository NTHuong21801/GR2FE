import { useForm } from "react-hook-form";
import "./update.css"
import { useEffect, useState } from "react";
import ApiService from "../../service/service";
export default function UpdateInforTeacher() {
    const { register, handleSubmit } = useForm();
    const [school, setSchool] = useState();
    const [selectedSchool, setSelectedSchool] = useState();
    const [locate, setLocate] = useState();
    useEffect(() => {
        ApiService.getAllSchool()
            .then(data => {
                setSchool(data);
            });
    }, [])
    const handleSelectSchool = (e) => {
        const schoolId = e.target.value;
        setSelectedSchool(schoolId);
        console.log(schoolId)
        ApiService.getMajorBySchoolId(schoolId)
          .then(data => {
            setLocate(data);
          });
      };
    const onSubmit = (d) => {

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
                            <input type="text" {...register("name", { required: true })} placeholder='Họ và tên' />
                        </div>
                        <div className="infoDetail">
                            <label>Số điện thoại: </label>
                            <input type="tel" {...register("phone", { required: true })} placeholder='Số điện thoại' />
                        </div>
                        <div className="infoDetail">
                            <label>Đơn vị trực thuộc: </label>
                            <select
                                onChange={handleSelectSchool}
                                {...register("school")}
                            >
                                {school && school.map(s => (
                                    <option value={s.schoolId} key={s.schoolId}>{s.schoolName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="infoDetail">
                            <label>Khoa - viện: </label>
                            <select {...register("locate")}>
                                {locate && locate.map(m => (
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