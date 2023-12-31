import { useForm } from "react-hook-form"
import React from "react";
import './divide.css'
import { useEffect } from "react";
import ApiService from "../../service/service";
export default function FormDivide({handleExportExcelFile }) {
    const [semesterList, setSemesterList] = React.useState();
    const [choice, setChoice] = React.useState();
    const { register, handleSubmit } = useForm();
    const onSubmit = (d) => {
        handleExportExcelFile(d);
    }; 
    useEffect(() => {
        ApiService.getAllChoice()
            .then(data => {
                setChoice(data)
            });
        ApiService.getAllSemester()
            .then(data => {
                setSemesterList(data);
            })
    }, [])
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
                            <label htmlFor="" className='label'>MSSV:</label>
                        </div>
                        <div className="col-md-3">
                            <input {...register("mssv", { required: true, maxLength: 8 })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Email:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="email" {...register("mail", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Họ và tên:</label>
                        </div>
                        <div className="col-md-3">
                            <input {...register("fullname", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Điện thoại liên lạc:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="tel" {...register("phone", { required: true, minLength: 10 })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Lớp sinh viên:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" {...register("grade", { required: true })} className='inputInfo' />
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
                            <input type="date" {...register("from", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1">
                            <span>đến</span>
                        </div>
                        <div className="col-md-3">
                            <input type="date" {...register("to", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="" className='label1'>Tên đồ án:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" {...register("topic", { required: true })} id="" className='inputInfo' />
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
                            <select {...register("choice1")} id="" className='selectChoice'>
                                <option value="">Chọn đề tài</option>
                                {choice != null && choice.map(m => (
                                    <option value={m.choiceName} key={m.choiceId}>{m.choiceName}</option>
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
                            <select {...register("choice2")} id="" className='selectChoice'>
                            <option value="">Chọn đề tài</option>
                                {choice != null && choice.map(m => (
                                    <option value={m.choiceName} key={m.choiceId}>{m.choiceName}</option>
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
                            <input type="text" className='inputInfo' {...register("choiceAnother")} id="" />
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
                            <textarea {...register("goalKnowledge", { required: true })} id="" cols="105" rows="1" className='inputForm' ></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Công nghệ sinh viên thu nhập được:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("goalTech", { required: true })} id="" cols="105" rows="1" className='inputForm' ></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Kỹ năng sinh viên phát triển được:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("goalSkill", { required: true })} id="" cols="105" rows="1" className='inputForm' ></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Sản phẩm kỳ vọng:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("goalProduct", { required: true })} id="" cols="105" rows="1" className='inputForm' ></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Vấn đề thực tiễn đồ án giải quyết được:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea {...register("goalIssue", { required: true })} cols="105" rows="1" className='inputForm' ></textarea>
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
                            <textarea {...register("content1D", { required: true })} id="" cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" {...register("content1From", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("content1To", { required: true })} className='inputInfo' />
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
                            <textarea {...register("content2D", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" {...register("content2From", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("content2To", { required: true })} className='inputInfo' />
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
                            <textarea {...register("content3D", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" {...register("content3From", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("content3To", { required: true })} className='inputInfo' />
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
                            <textarea {...register("content4D", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" {...register("content4From", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("content4To", { required: true })} className='inputInfo' />
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
                            <textarea {...register("content5D", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" {...register("content5From", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("content5To", { required: true })} className='inputInfo' />
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
                            <textarea {...register("content6D", { required: true })} cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" {...register("content6From", { required: true })} className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" {...register("content6To", { required: true })} className='inputInfo' />
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