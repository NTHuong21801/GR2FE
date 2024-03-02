import { useState } from "react";
import Loading from "../component/Loading";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./genFile.css"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function GenFile() {
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [typeFile, setTypeFile] = useState('');
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleChange = (event) => {
        setTypeFile(event.target.value);
    };
    return (
        <>
            {loading && <Loading />}
            <Header />
            <div className="main">
                <div className="container">
                    <div className="formHeader">
                        GENERATE FILE
                    </div>
                    <div className="checkBlock marginTop20">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Dạng file</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={typeFile}
                                        label="Dạng file"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="evaluate">Đánh giá ĐATN</MenuItem>
                                        <MenuItem value="debate">Phản biện ĐATN</MenuItem>
                                        <MenuItem value="divide">Phân công nhiệm vụ ĐATN</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="col-md-10 checkSign_body">
                            <div className="checkSign_body_icon">
                                <img src="assets/img/upload.png" alt="" />
                            </div>
                            <div className="checkSign_body_detail">Vui lòng tải file excel</div>
                            {selectedFile && <span id="fileName">{selectedFile.name}</span>}
                            <div className="checkSign_body_button">
                                <div className="input-area btn">
                                    <img src="/assets/img/Scroll Up.png" alt="" />
                                    <span>Chọn file tải lên</span>
                                    <input type="file" name="files" accept=".xlsx, .xls"  onChange={handleFileChange}/>
                                </div>
                                <div className="btn" id="checkPDF">Kiểm tra</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}