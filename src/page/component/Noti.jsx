export default function Noti({onCloseNoti, mess}){
    return(
        <>
            <div className="popupTableNoti">
                <div className="popup-contentNoti width40">
                    <div className="popup-header">
                        <p>Thông báo</p>
                        <img src="assets/icon/close.png" alt="" className='closeIcon' onClick={onCloseNoti}/>
                    </div>
                    <div className="popup-body">
                        <p className="nonFile">{mess}</p>
                    </div>
                </div>
            </div>
        </>
    )
}