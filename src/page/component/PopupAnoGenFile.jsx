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
                            <li>Đối với việc tạo 1 trong 3 phiếu: Phiếu đánh giá ĐATN, Phiếu phân công nhiệm vụ và Phiếu phản biện ĐATN tên file cần được để đúng định dạng.
                                <ul>
                                    <li>
                                        Phiếu giao nhiệm vụ:
                                        <ul>
                                            <li>File excel: <span>Phiếu giao nhiệm vụ ĐATN.xlsx</span></li>
                                            <li>File Json: Divide.json</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Phiếu đánh giá ĐATN:
                                        <ul>
                                            <li>File excel: <span>Phiếu đánh giá ĐATN.xlsx</span></li>
                                            <li>File Json: Evaluation.json</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Phiếu phản biện ĐATN:
                                        <ul>
                                            <li>File excel: <span>Phiếu phản biện ĐATN.xlsx</span></li>
                                            <li>File Json: Debate.json</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}