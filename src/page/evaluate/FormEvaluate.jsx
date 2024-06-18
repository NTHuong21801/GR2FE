/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ApiService from "../../service/service";
export default function FormEvaluate({ handleExportExcelFile }) {
    const [semesterList, setSemesterList] = React.useState();
    const { register, setValue, handleSubmit } = useForm();
    const [mssv, setMSSV] = React.useState();
    const onSubmit = (d) => {
        handleExportExcelFile(d);
    };
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await ApiService.getTeacherByAccount(localStorage.getItem('accountId'))
                setValue("GVHD", res.body.teacherName);
                setValue("sign", res.body.teacherName);
                setValue("teacherPos", res.body.locatedName);
                const res1 = await ApiService.getAllSemester();
                setSemesterList(res1);
            }catch(e){
                console.log(e)
            }
        }
        fetchData();
    }, [])
    const handleMSSVBlur = async () => {
        if(mssv){
            try{
                const res = await ApiService.getStudentByMssv(mssv);
                setValue("studentID", res.body.mssv);
                setValue("studentName", res.body.studentName);

            }catch(e){
                alert("Mã số sinh viên không tồn tại");
                console.log(e)
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
                        PHIẾU ĐÁNH GIÁ ĐỒ ÁN TỐT NGHIỆP CHO SINH VIÊN
                    </div>
                    <div className="infoHeader">
                        Thông tin giảng viên và sinh viên
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Giảng viên đánh giá:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text"{...register("GVHD", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Đơn vị công tác:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" {...register("teacherPos", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>MSSV:</label>
                        </div>
                        <div className="col-md-3">
                            <input
                                {...register("studentID")}
                                className='inputInfo'
                                onChange={(e) => setMSSV(e.target.value)}
                                onBlur={handleMSSVBlur}
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Họ và tên sinh viên:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" {...register("studentName", { required: true })} className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Loại đồ án:</label>
                        </div>
                        <div className="col-md-3">
                            <select {...register("type", { required: true })} className='inputInfo'>
                                <option value="Ứng dụng">Ứng dụng</option>
                                <option value="Nghiên cứu">Nghiên cứu</option>
                                <option value="Ứng dụng và nghiên cứu">Ứng dụng và nghiên cứu</option>
                            </select>
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
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Tên đồ án:</label>
                        </div>
                        <div className="col-md-9">
                            <input type="text" {...register("Tên đề tài", { required: true })} className='inputInfo' />
                        </div>
                    </div>
                    <div className="infoHeader">
                        Đánh giá kết quả thực hiện đồ án của sinh viên
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="" className="label2">Chất lượng sản phẩm</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <label htmlFor="" className="label2">Đánh giá thành phần (thang 10)</label>
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="" className="label2">Trọng số</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Tính độc đáo hoặc tính thời sự của đề tài</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("productOriginality", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Quy mô, đối tượng công việc đã thực hiện</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("productScale", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Độ khó, độ phức tạp của vấn đề </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("productDifficult", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Khả năng ứng dụng hoặc giá trị khoa học của giải pháp đề xuất</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("productAbility", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Độ hoàn thiện của sản phẩm</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("productComplete", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="" className="label2">Chất lượng báo cáo</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <label htmlFor="" className="label2">Đánh giá thành phần (thang 10)</label>
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="" className="label2">Trọng số</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Tính hợp lý của bố cục </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("reportRationality", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Tính đầy đủ và đúng đắn về các nội dung cần trình bày </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("reportCorrectness", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">2.0</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Văn phong và hình thức trình bày (chính tả, hình vẽ, bảng biểu, thuật ngữ...)</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("reportCorrectness", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Mức độ tin cậy về nội dung (có đầy đủ tài liệu tham khảo và tham chiếu tới tài liệu)</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("reportReality", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="" className="label2">Phẩm chất của sinh viên trong quá trình làm đồ án</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <label htmlFor="" className="label2">Đánh giá thành phần (thang 10)</label>
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="" className="label2">Trọng số</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Tinh thần trách nhiệm, thái độ nghiêm túc </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("studentResponsibility", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Khả năng làm chủ kiến thức, công nghệ </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("studentKnowledge", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Sự chủ động, sáng tạo, chấp nhận thách thức trong công việc</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("studentCreative", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="" className="label2">Điểm thưởng</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <label htmlFor="" className="label2">Đánh giá thành phần (thang 10)</label>
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="" className="label2">Trọng số</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <label htmlFor="">Thưởng 5 điểm cho đối tượng là tác giả chính của công bố khoa học là kết quả của đồ án (tối thiểu đã được chấp nhận đăng); hoặc sản phẩm ứng dụng của đồ án đã được triển khai thành công trong thực tế. </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" className="textaligncenter" {...register("bonusPoint", { required: true })} />
                        </div>
                        <div className="col-md-2 textaligncenter">
                            <label htmlFor="">1</label>
                        </div>

                    </div>
                    <div className="infoHeader">
                        Tổng kết
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Nhận xét chung:</label>
                        </div>
                        <div className="col-md-9">
                            <textarea {...register("comment", { required: true })} cols="105" rows="2" className='inputForm'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Kết luận:</label>
                        </div>
                        <div className="col-md-9">
                            {/* <textarea {...register("conclusion", { required: true })} cols="105" rows="2" className='inputForm'></textarea> */}
                            <select {...register("conclusion", { required: true })} className='inputInfo' >
                                <option value="">Chọn nguyện vọng</option>
                                <option value="Đồng ý cho sinh viên trình bày kết quả tại hội đồng chấm đồ án tốt nghiệp">Đồng ý cho sinh viên trình bày kết quả tại hội đồng chấm đồ án tốt nghiệp</option>
                                <option value="Không đồng ý cho sinh viên trình bày kết quả tại hội đồng chấm đồ án tốt nghiệp">Không đồng ý cho sinh viên trình bày kết quả tại hội đồng chấm đồ án tốt nghiệp</option>
                            </select>
                        </div>
                    </div>
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