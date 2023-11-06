import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import DebateMerge from "../service/DebateMerge";
import DebateInput from "../service/DebateInput";
const ExcelJS = require("exceljs");
const rowCenter = ['A1', 'A2', 'A4', 'A6', 'A12', 'D13', 'A15', 'D15',
    'E15', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21',
    'F22', 'F23', 'F24', 'F25', 'F26', 'F27', 'F28', 'F29',
    'F30', 'F31', 'F32', 'F33', 'D17', 'D18', 'D19', 'D20',
    'D21', 'E17', 'E18', 'E19', 'E20', 'E21', 'D23', 'D24',
    'D25', 'D26', 'E23', 'E24', 'E25', 'E26', 'E27', 'E28',
    'E29', 'D27', 'D28', 'D31', 'E31', 'D46', 'D47', 'D48'];
const fontSettings = {
    name: "Arial",
    family: 4,
    size: 11,
    bold: true,
};
const centerAlignment = {
    horizontal: 'center',
    vertical: 'middle',
};
const rowsHeader = ['A1', 'A2', 'A4', 'D7', 'D8', 'D9', 'D10', 'A12',
    'D13', 'A14', 'A15', 'D15', 'E15', 'F15', 'A16', 'F16', 'A22',
    'F22', 'A27', 'F27', 'A30', 'F30', 'A32', 'F32', 'A33', 'F33',
    'A35', 'A39', 'D42', 'D47']
const coloringPink = ['D7', 'D8', 'D9', 'D10', 'A12', 'D13', 'D17',
    'D18', 'D19', 'D20', 'D21', 'D23', 'D24', 'D25', 'D26', 'D28',
    'D29', 'D31', 'A36', 'A40']
const coloringYellow = ['A16', 'D16', 'E16', 'F16', 'A22', 'D22',
    'E22', 'F22', 'A27', 'D27', 'E27', 'F27', 'A30', 'D30', 'E30', 'F30']
const heightFix = [1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 35, 39, 47, 48]
export default function CreateDebate() {
    const debateMerge = DebateMerge;
    const debateInput = DebateInput;
    const exportExcelFile = () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('ĐG GV Phản biện');
        sheet.getColumn('E').width = 15
        sheet.getColumn('A').width = 35
        sheet.getColumn('D').width = 20
        sheet.getColumn('F').width = 15
        sheet.getRow(15).height = 40
        heightFix.forEach(f => {
            sheet.getRow(f).height = 30
        })
        if (rowsHeader.length > 0) {
            rowsHeader.forEach((r) => {
                sheet.getCell(r).font = fontSettings;
            });
        }

        if (rowCenter.length > 0) {
            rowCenter.forEach((c) => {
                sheet.getCell(c).alignment = centerAlignment;
            });
        }
        if (debateInput.length > 0) {
            debateInput.forEach((r) => {
                sheet.getCell(r.row).value = r.value;
            })
        }
        if (debateMerge.length > 0) {
            debateMerge.forEach((m) => {
                sheet.mergeCells(m.start, m.end)
            });
        }
        coloringPink.forEach(c => {
            sheet.getCell(c).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'EFCABF' },
            };
        })
        coloringYellow.forEach(c => {
            sheet.getCell(c).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'EEE8B6' },
            };
        })
        workbook.xlsx.writeBuffer().then(function (data) {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = "download.xlsx";
            anchor.click();
            window.URL.revokeObjectURL(url);
        });
    }
    return (
        <>
            <Header />
            <div className="mainForm">
                <div className="container">
                    <div className="formHeader">
                        PHIẾU PHẢN BIỆN ĐỒ ÁN TỐT NGHIỆP CHO SINH VIÊN
                    </div>
                    <div className="infoHeader">
                        Thông tin giảng viên và sinh viên
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Giảng viên phản biện:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Đơn vị công tác:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Họ và tên sinh viên:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>MSSV:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Loại đồ án:</label>
                        </div>
                        <div className="col-md-3">
                            <select name="" id="" className='inputInfo'>
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
                            <select name="" id="" className='inputInfo'>
                                <option value="20231A">20231A</option>
                                <option value="20231B">20231B</option>
                                <option value="20232A">20232A</option>
                                <option value="20232B">20232B</option>
                            </select>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Tên đồ án:</label>
                        </div>
                        <div className="col-md-9">
                            <input type="text" name="" id="" className='inputInfo' />
                        </div>
                    </div>
                    <div className="infoHeader">
                        Đánh giá kết quả thực hiện đồ án của sinh viên
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="" className="label2">Chất lượng sản phẩm</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <label htmlFor="" className="label2">Đánh giá thành phần (thang 10)</label>
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="" className="label2">Trọng số</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="" className="label2">Kết quả</label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Tính độc đáo hoặc tính thời sự của đề tài</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Quy mô, đối tượng công việc đã thực hiện</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Độ khó, độ phức tạp của vấn đề </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Khả năng ứng dụng hoặc giá trị khoa học của giải pháp đề xuất</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Độ hoàn thiện của sản phẩm</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="" className="label2">Chất lượng báo cáo</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <label htmlFor="" className="label2">Đánh giá thành phần (thang 10)</label>
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="" className="label2">Trọng số</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="" className="label2">Kết quả</label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Tính hợp lý của bố cục </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Tính đầy đủ và đúng đắn về các nội dung cần trình bày </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">2.0</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Văn phong và hình thức trình bày (chính tả, hình vẽ, bảng biểu, thuật ngữ...)</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Mức độ tin cậy về nội dung (có đầy đủ tài liệu tham khảo và tham chiếu tới tài liệu)</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="" className="label2">Đánh giá kết quả kiểm tra sau phản biện</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <label htmlFor="" className="label2">Đánh giá thành phần (thang 10)</label>
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="" className="label2">Trọng số</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="" className="label2">Kết quả</label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Tính hợp lý, đúng đắn và đầy đủ khi trả lời câu hỏi trong phiên phản biện </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 borderBottom"></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Kỹ năng trình bày, demo sản phẩm làm nổi bật được kết quả </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">1.0</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="" className="label2">Điểm thưởng</label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <label htmlFor="" className="label2">Đánh giá thành phần (thang 10)</label>
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="" className="label2">Trọng số</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="" className="label2">Kết quả</label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <label htmlFor="">Thưởng 5 điểm cho đối tượng là tác giả chính của công bố khoa học là kết quả của đồ án (tối thiểu đã được chấp nhận đăng); hoặc sản phẩm ứng dụng của đồ án đã được triển khai thành công trong thực tế. </label>
                        </div>
                        <div className="col-md-3 textaligncenter">
                            <input type="number" />
                        </div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor="">0.5</label>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1 textaligncenter">
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="infoHeader">
                        Tổng kết
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Nhận xét chung:</label>
                        </div>
                        <div className="col-md-9">
                            <textarea name="" id="" cols="105" rows="2" className='inputForm'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Kết luận:</label>
                        </div>
                        <div className="col-md-9">
                            <textarea name="" id="" cols="105" rows="2" className='inputForm'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-2">
                            <div className="btn">Clear All</div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <div className="btn" onClick={exportExcelFile}>Export Excel File</div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}