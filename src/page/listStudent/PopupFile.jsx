import "./list.css";
export default function PopupFile({ onClose, data }) {
    return (
        <>
            <div className="popupTable">
                <div className="popup-content width40">
                    <div className="popup-header">
                        <p>Danh sách file</p>
                        <img src="assets/icon/close.png" alt="" className='closeIcon' onClick={onClose}/>
                    </div>
                    <div className="popup-body">
                        {data == '' ? (
                            <p className="nonFile">Không có file nào hiển thị</p>
                        ) : (
                            <>
                                {data.map(d => (
                                    <div key={d.excelId} className="evaluateFile backgroundGray">
                                        <img src="assets/icon/excel.png" alt="" className='excelIcon' />
                                        <span>{d.excelName}</span>
                                        <a href={d.excelUrl} download className="btn">
                                            Download
                                            <img src="assets/icon/download.png" alt="" />
                                        </a>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}