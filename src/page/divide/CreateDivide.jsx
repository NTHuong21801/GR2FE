import Footer from '../footer/Footer'
import Header from '../header/Header'
import './divide.css'
export default function CreateDidive() {
    return (
        <>
            <Header />
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
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Email:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Họ và tên:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Điện thoại liên lạc:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Lớp sinh viên:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Kỳ học:</label>
                        </div>
                        <div className="col-md-3">
                            <select name="" id="" className='inputInfo'>
                                <option value="20231A">20231A</option>
                                <option value="20231B">20231B</option>
                                <option value="20232A">20232A</option>
                                <option value="20232B">20232B</option>
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
                            <input type="date" name="" id="" className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến</span>
                        </div>
                        <div className="col-md-3">
                            <input type="date" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="" className='label1'>Tên đồ án:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className='inputInfo' />
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
                            <input type="text" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Lựa chọn 2:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Đề xuất khác:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className='inputInfo' />
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
                            <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Công nghệ sinh viên thu nhập được:</label>
                        </div>
                        <div className="col-md-8">
                        <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Kỹ năng sinh viên phát triển được:</label>
                        </div>
                        <div className="col-md-8">
                        <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Sản phẩm kỳ vọng:</label>
                        </div>
                        <div className="col-md-8">
                        <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="">Vấn đề thực tiễn đồ án giải quyết được:</label>
                        </div>
                        <div className="col-md-8">
                        <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
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
                        <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" name="" id="" className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" name="" id="" className='inputInfo' />
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
                        <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" name="" id="" className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" name="" id="" className='inputInfo' />
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
                        <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" name="" id="" className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" name="" id="" className='inputInfo' />
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
                        <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" name="" id="" className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" name="" id="" className='inputInfo' />
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
                        <textarea name="" id="" cols="105" rows="1" className='inputForm'></textarea>
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
                            <input type="number" name="" id="" className='inputInfo' s />
                        </div>
                        <div className="col-md-1">
                            <span>đến tuần</span>
                        </div>
                        <div className="col-md-3">
                            <input type="number" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-2">
                            <div className="btn">Clear All</div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <div className="btn">Export Excel File</div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}