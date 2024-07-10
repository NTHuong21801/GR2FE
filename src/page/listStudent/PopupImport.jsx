import { useState } from "react";
import "./list.css";
import ApiService from "../../service/service";
import Noti from "../component/Noti";
import { useSelector } from "react-redux";
export default function PopupImport({ onClose}) {
    const token = useSelector((state) => state.accessToken);
    const [selectedFileDSSV, setSelectedFileDSSV] = useState(null);
    const [noti, setNoti] = useState(false);
    const [notiMes, setNotiMes] = useState('');
    const handleFileChangeList = (event) => {
        const file = event.target.files[0];
        setSelectedFileDSSV(file);
    };
    const handleCloseNoti = () => {
        setNoti(false);
        onClose();
    }
    const handleImportData = async () => {
        const formData = new FormData();
        formData.append('file', selectedFileDSSV);
        try{
            const res = await ApiService.readListFileAndStoreDB(formData, token);
            if(res.responseCode == '200'){
                setNotiMes("Import List Student Successfully. You can see list of students in the table.");
                setNoti(true);
            }else{
                setNotiMes("Import List Student Fail. You should try again.");
                setNoti(true);
            }
        }catch(e){
            console.error(e);
        }
    }
    return (
        <>
            {noti && <Noti onCloseNoti={handleCloseNoti} mess={notiMes}/>}
            <div className="popupTable">
                <div className="popup-content width50">
                    <div className="popup-header">
                        <p>Tải lên danh sách sinh viên</p>
                        <img src="assets/icon/close.png" alt="" className='closeIcon' onClick={onClose}/>
                    </div>
                    <div className="checkSign_body">
                                <div className="checkSign_body_icon">
                                    <img src="assets/img/upload.png" alt="" />
                                </div>
                                <div className="checkSign_body_detail">Vui lòng tải lên file DSSV</div>
                                {selectedFileDSSV && <span id="fileName">{selectedFileDSSV.name}</span>}
                                <div className="checkSign_body_button">
                                    <div className="input-area btn">
                                        <img src="/assets/img/Scroll Up.png" alt="" />
                                        <span>Chọn file tải lên</span>
                                        <input type="file" name="files" accept=".xlsx, .xls" onChange={handleFileChangeList} />
                                    </div>
                                </div>
                    </div>
                    <div className="popup-button" onClick={handleImportData}>
                        <div className="btn">
                            <img src="/assets/icon/download.png" alt="" />
                            Import List DSSV
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}