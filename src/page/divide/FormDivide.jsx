import { useForm } from "react-hook-form"
import React from "react";
import './divide.css'
import { useEffect } from "react";
import ApiService from "../../service/service";
import { useSelector } from "react-redux";
export default function FormDivide({ handleExportExcelFile }) {
    const token = useSelector((state) => state.accessToken);
    const accountId = useSelector((state) => state.accountId);
    const [semesterList, setSemesterList] = React.useState();
    const [choice, setChoice] = React.useState();
    const [mssv, setMSSV] = React.useState();
    const { register, setValue, handleSubmit } = useForm();
    const onSubmit = (d) => {
        handleExportExcelFile(d);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ApiService.getAllChoice(token);
                setChoice(res);
                const res1 = await ApiService.getAllSemester(token);
                setSemesterList(res1);
                const re2 = await ApiService.getTeacherByAccount(accountId, token)
                setValue("GVHD", re2.body.teacherName);
                setValue("sign", re2.body.teacherName);
                setValue("Địa điểm", re2.body.locatedName);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])
    const handleMSSVBlur = async () => {
        if (mssv) {
            try {
                const data = await ApiService.getStudentByMssv(mssv, token);
                setValue("StudentID", data.body.mssv);
                setValue("Email", data.body.studentEmail);
                setValue("studentname", data.body.studentName);
                setValue("phone", data.body.studentPhone);
                setValue("Lớp", data.body.className);

            } catch (e) {
                alert("Mã số sinh viên không tồn tại");
                console.log(e);
            }
        }
    }
    const clearAll = () => {
        window.location.reload();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mainForm">
                <div className="container">
                    <div className="formHeader">
                        PHÂN CÔNG NHIỆM VỤ ĐỒ ÁN TỐT NGHIỆP CHO SINH VIÊN
                    </div>
                    <div className="infoHeader">
                        Thông tin sinh viên
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Giảng viên hướng dẫn:</label>
                        </div>
                        <div className="col-md-3">
                        <input type="text"{...register("GVHD", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Đơn vị công tác:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" {...register("Địa điểm", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>MSSV:</label>
                        </div>
                        <div className="col-md-3">
                            <input
                                {...register("StudentID")}
                                className='inputInfo'
                                onChange={(e) => setMSSV(e.target.value)}
                                onBlur={handleMSSVBlur}
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Email:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="email" {...register("Email")} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Họ và tên:</label>
                        </div>
                        <div className="col-md-3">
                            <input {...register("studentname")} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Điện thoại liên lạc:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="tel" {...register("phone")} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Lớp sinh viên:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" {...register("Lớp")} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Kỳ học:</label>
                        </div>
                        <div className="col-md-3">
                            <select {...register("semester")} className='inputInfo' >
                                <option value="">Chọn kỳ</option>
                                {semesterList != null && semesterList.map(s => (
                                    <option value={s.semesterName} key={s.semesterId}>{s.semesterName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="infoHeader">
                        Thông tin đồ án tốt nghiệp
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="" className='label1'>Thời gian làm đồ án:</label>
                        </div>
                        <div className="col-md-1">
                            <span>từ</span>
                        </div>
                        <div className="col-md-3">
                            <input type="date" {...register("Thời gian làm ĐATN từ", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1">
                            <span>đến</span>
                        </div>
                        <div className="col-md-3">
                            <input type="date" {...register("Thời gian làm ĐATN đến", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="" className='label1'>Tên đồ án:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" {...register("Tên đề tài", { required: true })} id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="" className='label1'>Lĩnh vực đề tài:</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Lựa chọn 1:</label>
                        </div>
                        <div className="col-md-8">
                            <select {...register("LV")} id="" className='selectChoice'>
                                <option value="">Chọn đề tài</option>
                                {choice != null && choice.map(m => (
                                    <option value={m.topicName} key={m.choiceId}>{m.topicName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Lựa chọn 2:</label>
                        </div>
                        <div className="col-md-8">
                            <select {...register("LV1")} id="" className='selectChoice'>
                                <option value="">Chọn đề tài</option>
                                {choice != null && choice.map(m => (
                                    <option value={m.topicName} key={m.choiceId}>{m.topicName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Đề xuất khác:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className='inputInfo' {...register("LV2")} id="" />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="" className='label1'>Mục tiêu của ĐATN:</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Kiến thức sinh viên thu nhập được:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Kiến thức sinh viên thu nhập được", { required: true })} id="" cols="105" rows="1" className='inputForm' ></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Công nghệ sinh viên thu nhập được:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Công nghệ sinh viên thu nhập được", { required: true })} id="" cols="105" rows="1" className='inputForm' ></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Kỹ năng sinh viên phát triển được:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Kỹ năng sinh viên phát triển được", { required: true })} id="" cols="105" rows="1" className='inputForm' ></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Sản phẩm kỳ vọng:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Sản phẩm kỳ vọng", { required: true })} id="" cols="105" rows="1" className='inputForm' ></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Vấn đề thực tiễn đồ án giải quyết được:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Vấn đề thực tiễn đồ án giải quyết được", { required: true })} cols="105" rows="1" className='inputForm' ></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="infoHeader">
                        Phân công nhiệm vụ
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="" className='label1'>Nội dung 1: Tìm hiểu tổng quan về bài toán</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Chi tiết:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Nội dung 1: Tìm hiểu tổng quan về bài toán, chi tiết", { required: true })} id="" cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Thời gian:</label>
                        </div>
                        <div className="col-md-1">
                            <span>từ tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 1: Tìm hiểu tổng quan về bài toán, thời gian từ tuần", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 1: Tìm hiểu tổng quan về bài toán, thời gian đến tuần", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="" className='label1'>Nội dung 2: Tìm hiểu tổng quan về công nghệ liên quan</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Chi tiết:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Nội dung 2: Tìm hiểu tổng quan về công nghệ liên quan, chi tiết", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Thời gian:</label>
                        </div>
                        <div className="col-md-1">
                            <span>từ tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 2: Tìm hiểu tổng quan về công nghệ liên quan, thời gian từ tuần", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 2: Tìm hiểu tổng quan về công nghệ liên quan, thời gian đến tuần", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="" className='label1'>Nội dung 3: Phân tích thiết kế</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Chi tiết:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Nội dung 3: Phân tích thiết kế, chi tiết", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Thời gian:</label>
                        </div>
                        <div className="col-md-1">
                            <span>từ tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 3: Phân tích thiết kế, thời gian từ tuần", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 3: Phân tích thiết kế, thời gian đến tuần", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="" className='label1'>Nội dung 4: Xây dựng chương trình</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Chi tiết:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Nội dung 4: Xây dựng chương trình, chi tiết", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Thời gian:</label>
                        </div>
                        <div className="col-md-1">
                            <span>từ tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 4: Xây dựng chương trình, thời gian từ tuần", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 4: Xây dựng chương trình, thời gian đến tuần", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="" className='label1'>Nội dung 5: Thử nghiệm và đánh giá</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Chi tiết:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Nội dung 5: Thử nghiệm và đánh giá, chi tiết", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Thời gian:</label>
                        </div>
                        <div className="col-md-1">
                            <span>từ tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 5: Thử nghiệm và đánh giá, thời gian từ tuần", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 5: Thử nghiệm và đánh giá, thời gian đến tuần", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="" className='label1'>Nội dung 6: Triển khai trong thực tế; và đánh giá, phản hổi của người sử dụng</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Chi tiết:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("Nội dung 6: Triển khai trong thực tế và đánh giá của người dùng, chi tiết", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Thời gian:</label>
                        </div>
                        <div className="col-md-1">
                            <span>từ tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 6: Triển khai trong thực tế và đánh giá của người dùng, thời gian từ tuần", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("Nội dung 6: Triển khai trong thực tế và đánh giá của người dùng, thời gian đến tuần", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-2">
                            <div className="btn" onClick={clearAll}>Clear All</div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <input type="submit" value="Export Excel File" className="btn" />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </form>
    )
}