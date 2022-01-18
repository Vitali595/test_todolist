import React, {useState} from "react";
import style from "./TaskItem.module.css";
import {Link} from "react-router-dom";
import {CustomButton} from "../../common/customButton/CustomButton";
import {Modal} from "../../common/modal/Modal";

export function TaskItem({task, removeTask}) {
    const {id, name, description} = task;

    const [modal, setModal] = useState(false);

    return (
        <>
            {modal && (
                <Modal
                    title="Вы действительно хотите удалить задачу?"
                    footer={
                        <div className={style.modalButtons}>
                            <CustomButton onClickHandler={() => setModal(false)} title="Закрыть"/>
                            <CustomButton onClickHandler={() => {
                                removeTask(id);
                                setModal(false);
                            }} title="Удалить"/>
                        </div>
                    }
                    onClose={() => setModal(false)}
                />
            )}
            <div className={style.task}>
                <div>
                    <h3 className={style.name}>{name}</h3>
                    <span className={style.description}>{description}</span>
                </div>
                <div className={style.buttonsGroup}>
                    <CustomButton onClickHandler={() => setModal(true)} title="Удалить"/>
                    <Link to={'/todolist/change/' + id} style={{textDecoration: 'none'}}>
                        <CustomButton title="Изменить"/>
                    </Link>
                </div>
            </div>
        </>
    );
}