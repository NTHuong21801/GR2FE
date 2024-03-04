import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./genFile.css"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ApiService from "../../service/service";
import Loading from "../component/Loading";
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
export default function GenFile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [typeFile, setTypeFile] = useState('');
    const [loading, setLoading] = useState(false);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleChange = (event) => {
        setTypeFile(event.target.value);
    };
    const genFileEvaluate = async (selectedFile, fileType) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('file', selectedFile);
        try {
            const json = await ApiService.readFileUpload(formData);
            var jsonInput = [];
            json.forEach(j => {
                jsonInput.push(JSON.stringify(j));
            })
            const data = JSON.stringify(
                {
                    "fileType": fileType,
                    "json": jsonInput
                }
            );
            const listUrl = await ApiService.writeDataToFile(data);
            listUrl.forEach(l => {
                const fileName = l.split('/')[3];
                downloadFiles(fileName);
            })
            setLoading(false);
        } catch (e) {
            console.error(e)
        }
    }
    const handleGenFile = async () => {
        if (selectedFile && typeFile) {
            genFileEvaluate(selectedFile, typeFile);
        } else {
            alert("Bạn cần tải file lên và chọn dạng file cần xuất ra!")
        }
    }
    return (
        <>
            {loading && <Loading />}
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
                                        <MenuItem value="EXCEL_EVALUATE">Đánh giá ĐATN</MenuItem>
                                        <MenuItem value="EXCEL_DEBATE">Phản biện ĐATN</MenuItem>
                                        <MenuItem value="EXCEL_DIVIDE">Phân công nhiệm vụ ĐATN</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="col-md-10 checkSign_body">
                            <div className="checkSign_body_icon">
                                <img src="assets/img/upload.png" alt="" />
                            </div>
                            <div className="checkSign_body_detail">Vui lòng tải file (.xlsx, .xls) của bạn lên</div>
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