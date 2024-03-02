import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./genFile.css"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ApiService from "../../service/service";
async function downloadFiles(fileName) {
    const token = localStorage.getItem("access_token");
    await fetch('http://localhost:8090/user/downloadMultiFile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            fileName: fileName,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('There was a problem with the download:', error);
        });
};
async function genFileEvaluate(selectedFile) {
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
        const json = await ApiService.readFileUpload(formData);
        const listUrl = await ApiService.writeDataToFile(json);
        listUrl.forEach(l => {
            const fileName = l.split('/')[3];
            downloadFiles(fileName);
        })
    } catch (e) {
        console.error(e)
    }
}
export default function GenFile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [typeFile, setTypeFile] = useState('');
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setSelectedFile(file);
    };
    const handleChange = (event) => {
        setTypeFile(event.target.value);
    };
    const handleGenFile = async () => {
        if (selectedFile && typeFile) {
            if (typeFile == 'evaluate') {
                genFileEvaluate(selectedFile);
            } else if (typeFile == 'debate') {
                genFileEvaluate(selectedFile);
            } else {
                genFileEvaluate(selectedFile);
            }
        } else {
            alert("Bạn cần tải file lên và chọn dạng file cần xuất ra!")
        }
    }
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="checkBlock">
                        <div className="formHeader">
                            GENERATE FILE
                        </div>
                        <div className="row marginTop20">
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
                                    <input type="file" name="files" accept=".xlsx, .xls" onChange={handleFileChange} />
                                </div>
                                <div className="btn" onClick={handleGenFile}>Generate File</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}