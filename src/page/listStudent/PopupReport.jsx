import "./list.css";
export default function PopupReport({ onClose, data }) {
    return (
        <>
            <div className="popupTable">
                <div className="popup-content width40">
                    <div className="popup-header">
                        <p>Báo cáo của sinh viên</p>
                        <img src="assets/icon/close.png" alt="" className='closeIcon' onClick={onClose}/>
                    </div>
                    <div className="popup-body">
                        {data == null ? (
                            <p className="nonFile">Sinh viên chưa có báo cáo</p>
                        ) : (
                            <div className="evaluateFile backgroundGray">
                                <img src="assets/icon/pdf.png" alt="" className='excelIcon' />
                                <span>Báo cáo ĐATN</span>
                                <a href={data} download className="btn">
                                    Download
                                    <img src="assets/icon/download.png" alt="" />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}