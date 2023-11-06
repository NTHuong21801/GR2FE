import { useEffect } from 'react';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Merge from '../service/Merge';
import Rows from '../service/Rows';
import './divide.css'
import React from "react";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"
const ExcelJS = require("exceljs");
const Url = process.env.REACT_APP_API_URL;
const rowsHeader = [1, 2, 4, 7, 11, 15, 17, 22, 41, 43, 48, 53, 58, 63, 68, 75, 85, 87, 92];
const rowCenter = ['A1', 'A2', 'A3', 'A4', 'E5', 'F5', 'D14', 'I14']
const rowWrap = ['A68'];
const coloringGreen = ['C8', 'C9', 'C10', 'I8', 'I9', 'C12', 'C13', 'D14', 'I14', 'A16', 'A21', 'A24', 'A28', 'A32', 'A34', 'A38', 'A45', 'A50', 'A55', 'A60', 'A65', 'A70', 'F5'];
const coloringOrange = ['C18', 'C19', 'I43', 'K43', 'I48', 'K48', 'I53', 'K53', 'I58', 'K58', 'I63', 'K63', 'I68', 'K68'];
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

const wrapTextAlignment = {
    wrapText: true,
};
const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
        ]
    ]
}
export default function CreateDidive() {
    const [mssv, setMSSV] = React.useState();
    const [email, setEmail] = React.useState();
    const [fullname, setFullname] = React.useState();
    const [phone, setPhone] = React.useState();
    const [grade, setGrade] = React.useState();
    const [teacher, setTeacher] = React.useState();
    const [from, setFrom] = React.useState();
    const [to, setTo] = React.useState();
    const [topic, setTopic] = React.useState();
    const [semester, setSemester] = React.useState();
    const [semesterList, setSemesterList] = React.useState();
    const [choice, setChoice] = React.useState();
    const [choice1, setChoice1] = React.useState();
    const [choice2, setChoice2] = React.useState();
    const [choiceAnother, setChoiceAnother] = React.useState();
    const [goalKnowledge, setGoalKnowledge] = React.useState();
    const handleInputChange = (e, fieldName) => {
        if (fieldName === "mssv") {
            setMSSV(e.target.value);
        } else if (fieldName === "email") {
            setEmail(e.target.value);
        } else if (fieldName === "fullname") {
            setFullname(e.target.value);
        } else if (fieldName === "phone") {
            setPhone(e.target.value);
        } else if (fieldName === "grade") {
            setGrade(e.target.value);
        } else if (fieldName === "teacher") {
            setTeacher(e.target.value);
        } else if (fieldName === "from") {
            setFrom(e.target.value);
        } else if (fieldName === "to") {
            setTo(e.target.value);
        } else if (fieldName === "topic") {
            setTopic(e.target.value);
        } else if (fieldName === "semester") {
            setSemester(e.target.value);
        } else if (fieldName === "choice1") {
            setChoice1(e.target.value);
        } else if (fieldName === "choice2") {
            setChoice2(e.target.value);
        } else if (fieldName === "choiceAnother") {
            setChoiceAnother(e.target.value);
        } else if (fieldName === "goalKnowledge") {
            setGoalKnowledge(e.target.value);
        }
    }
    const getPlainText = () => {
        if (goalKnowledge != null) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = goalKnowledge ;
            const plainText = tempDiv.textContent || tempDiv.innerText;
            return plainText;
        }
    }
    const inputValue = [
        {
            row: "I8",
            value: mssv
        },
        {
            row: "I9",
            value: email
        },
        {
            row: "C8",
            value: fullname
        },
        {
            row: "C9",
            value: phone
        },
        {
            row: "C10",
            value: grade
        },
        {
            row: "C12",
            value: teacher
        },

        {
            row: "D14",
            value: from
        },
        {
            row: "I14",
            value: to
        },
        {
            row: "A16",
            value: topic
        },
        {
            row: "F5",
            value: semester
        },
        {
            row: "C18",
            value: choice1
        },
        {
            row: "C19",
            value: choice2
        },
        {
            row: "A21",
            value: choiceAnother
        },
        {
            row: "A24",
            value: getPlainText()
        },
    ]
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessToken'));
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    useEffect(() => {
        fetch(`http://localhost:2111/admin/choice/getAll`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setChoice(result);
            })
            .catch(error => console.log('error', error));
    }, []);
    useEffect(() => {
        fetch(`http://localhost:2111/admin/semester/getAll`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setSemesterList(result);
            })
            .catch(error => console.log('error', error));
    }, []);
    const rowHeaderValue = Rows;
    const mergeValue = Merge;
    const exportExcelFile = () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('My Sheet', {
            headerFooter: { firstHeader: "Hello Exceljs", firstFooter: "Hello World" }
        });
        if (rowsHeader.length > 0) {
            rowsHeader.forEach((r) => {
                sheet.getRow(r).font = fontSettings;
            });
        }

        if (rowCenter.length > 0) {
            rowCenter.forEach((c) => {
                sheet.getCell(c).alignment = centerAlignment;
            });
        }

        if (rowWrap.length > 0) {
            rowWrap.forEach((c) => {
                sheet.getCell(c).alignment = wrapTextAlignment;
            });
        }
        sheet.columns = [{ width: 15 }]
        if (rowHeaderValue.length > 0) {
            rowHeaderValue.forEach((r) => {
                sheet.getCell(r.row).value = r.value;
            })
        }
        inputValue.forEach((r) => {
            sheet.getCell(r.row).value = r.value;
        })
        if (mergeValue.length > 0) {
            mergeValue.forEach((m) => {
                sheet.mergeCells(m.start, m.end)
            });
        }
        coloringGreen.forEach(c => {
            sheet.getCell(c).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'ABF2C7' },
            };
        })
        coloringOrange.forEach(c => {
            sheet.getCell(c).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FF8000' },
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
    const clearAll = () => {
        setMSSV('')
    }
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
                            <input type="text" name='mssv' id="" className='inputInfo' onChange={(e) => handleInputChange(e, 'mssv')} />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Email:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name='email' id="" className='inputInfo' onChange={(e) => handleInputChange(e, 'email')} />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Họ và tên:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="fullname" id="" className='inputInfo' onChange={(e) => handleInputChange(e, 'fullname')} />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Điện thoại liên lạc:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="phone" id="" className='inputInfo' onChange={(e) => handleInputChange(e, 'phone')} />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Lớp sinh viên:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="grade" id="" className='inputInfo' onChange={(e) => handleInputChange(e, 'grade')} />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="" className='label'>Kỳ học:</label>
                        </div>
                        <div className="col-md-3">
                            <select name="semester" id="" className='inputInfo' onChange={(e) => handleInputChange(e, 'semester')}>
                                {semesterList != null && semesterList.map(s => (
                                    <option value={s.semesterName}>{s.semesterName}</option>
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
                            <input type="date" name="from" id="" className='inputInfo' onChange={(e) => handleInputChange(e, 'from')} />
                        </div>
                        <div className="col-md-1">
                            <span>đến</span>
                        </div>
                        <div className="col-md-3">
                            <input type="date" name="to" id="" className='inputInfo' onChange={(e) => handleInputChange(e, 'to')} />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="" className='label1'>Tên đồ án:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" name="topic" id="" className='inputInfo' onChange={(e) => handleInputChange(e, 'topic')} />
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
                            <select name="choice1" id="" onChange={(e) => handleInputChange(e, 'choice1')} className='selectChoice'>
                                {choice != null && choice.map(m => (
                                    <option value={m.choiceName}>{m.choiceName}</option>
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
                            <select name="choice2" id="" onChange={(e) => handleInputChange(e, 'choice2')} className='selectChoice'>
                                {choice != null && choice.map(m => (
                                    <option value={m.choiceName}>{m.choiceName}</option>
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
                            <input type="text" className='inputInfo' name="choiceAnother" id="" onChange={(e) => handleInputChange(e, 'choiceAnother')} />
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
                            <textarea name="goalKnowledge" id="" cols="105" rows="1" className='inputForm' onChange={(e) => handleInputChange(e, 'goalKnowledge')}></textarea>
                            {/* <ReactQuill theme="snow" value={goalKnowledge}
                                onChange={setGoalKnowledge}
                                className="editor-input"
                                modules={modules}
                            /> */}
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
                            <div className="btn" onClick={clearAll}>Clear All</div>
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