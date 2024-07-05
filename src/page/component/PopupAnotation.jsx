export default function PopupAnotation({onClose}){
    return(
        <>
            <div className="popupTable">
                <div className="popup-content width60">
                    <div className="popup-header">
                        <p className="noteText">Lưu ý</p>
                        <img src="assets/icon/close.png" alt="" className='closeIcon' onClick={onClose}/>
                    </div>
                    <div className="popup-body">
                        <h5>Giảng viên cần lưu ý một vài thông tin sau đây:</h5>
                        <ul>
                            <li>Khi nhận được file danh sách sinh viên từ QLĐT, giảng viên cần thực hiện chức năng import danh sách
                                sinh viên vào hệ thống để kiểm soát sinh viên cũng như bắt đầu tạo các phiếu giao.
                            </li>
                            <li>Trường hợp các trường thông tin liên quan đến sinh viên thay đổi thì giảng viên chỉ việc export lại từ QLĐT, 
                                và import lại vào Website này thì hệ thống sẽ ghi đè theo MSSV</li>
                            <li>
                                Nếu giảng viên upload các phiếu từ giao diện thì các thông tin trong phiếu sẽ được ghi đè vào danh sách này
                                thông qua MSSV của sinh viên
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}