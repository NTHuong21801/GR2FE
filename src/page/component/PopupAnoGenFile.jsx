export default function PopupAnoGenFile({ onClose }) {
    return (
        <>
            <div className="popupTable">
                <div className="popup-content width60">
                    <div className="popup-header">
                        <p className="noteText">Lưu ý</p>
                        <img src="assets/icon/close.png" alt="" className='closeIcon' onClick={onClose} />
                    </div>
                    <div className="popup-body">
                        <h5>Giảng viên cần lưu ý một vài thông tin sau đây:</h5>
                        <ul>
                            <li>Giảng viên cần tải đủ 3 file bao gồm: File danh sách sinh viên, file excel Template và file json lên trước khi nhấn <strong>Generate File</strong>.
                            </li>
                            <li>File danh sách sinh viên phải là file được lấy từ QLDT về.
                            </li>
                            <li>File excel template và file Json cần đứng ánh xạ đúng với nhau để có thể tạo hàng loạt file một cách đúng nhất dựa vào danh sách sinh viên.</li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}