export default function Noti({onClose, mess}){
    return(
        <>
            <div className="popupTable">
                <div className="popup-content width30">
                    <div className="popup-header">
                        <p>Thông báo</p>
                        <img src="assets/icon/close.png" alt="" className='closeIcon' onClick={onClose}/>
                    </div>
                    <div className="popup-body">
                        <p className="nonFile">{mess}</p>
                    </div>
                </div>
            </div>
        </>
    )
}