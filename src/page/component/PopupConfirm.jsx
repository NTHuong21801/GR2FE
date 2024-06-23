import "../listStudent/list.css";
export default function PopupConfirm({ onClose, message, handleDelete }) {
    return (
        <>
            <div className="popupTable">
                <div className="popup-content width40">
                    <div className="popup-header">
                        <p>{message}</p>
                    </div>
                    <div className="rowFlex width100">
                        <div className="btn-yes btn" onClick={handleDelete}>Yes</div>
                        <div className="btn-no btn" onClick={onClose}>No</div>
                    </div>
                </div>
            </div>
        </>
    )
}