import React, {useEffect} from "react";
import style from "./Modal.module.css";

export const Modal = ({title = "", footer = "", onClose}) => {

    const onKeydown = ({key}) => {
        switch (key) {
            case "Escape": {
                onClose();
                break;
            }
            default:
                return;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", onKeydown);
        return () => document.removeEventListener("keydown", onKeydown);
    });

    return (
        <React.Fragment>
            <div className={style.modal} onClick={onClose}>
                <div className={style.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={style.modalHeader}>{title}</div>
                    {footer && <div className={style.modalFooter}>{footer}</div>}
                </div>
            </div>
        </React.Fragment>
    )
}