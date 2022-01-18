import React, {useEffect, useState} from "react";
import style from "./TaskForm.module.css";
import {Link, useHistory, useParams} from "react-router-dom";
import {CustomButton} from "../customButton/CustomButton";
import {Modal} from "../modal/Modal";
import {TaskForm} from "./TaskForm";

export function ChangeTask({changeTask, removeTask, task}) {
    const history = useHistory();
    const {id} = useParams();
    const [formData, setFormData] = useState({});
    const [modal, setModal] = useState('');

    useEffect(() => {
        setFormData({name: task.name, description: task.description});
    }, [task])

    const setFormDataHandler = (name, description) => {
        setFormData({name, description});
    };

    const changeTaskHandler = () => {
        changeTask({id, name: formData.name, description: formData.description});

        return history.push('/todolist');
    };

    const removeTaskHandler = () => {
        removeTask(id);

        return history.push('/todolist');
    };

    return (
        <>
            {modal && (
                <Modal
                    title={`Вы действительно хотите ${modal} задачу?`}
                    footer={
                        <div className={style.modalButtons}>
                            <CustomButton onClickHandler={() => setModal('')} title="закрыть"/>
                            <CustomButton onClickHandler={() => {
                                if (modal === 'удалить') {
                                    removeTaskHandler();
                                }
                                if (modal === 'изменить') {
                                    changeTaskHandler();
                                }

                                setModal('');
                            }} title={modal}/>
                        </div>
                    }
                    onClose={() => setModal('')}
                />
            )}
            <TaskForm taskHandler={setFormDataHandler} values={formData}>
                <div className={style.buttonsGroup}>
                    <Link to="/todolist" style={{textDecoration: 'none'}}>
                        <CustomButton title="Назад"/>
                    </Link>
                    <CustomButton type="submit" onClickHandler={() => setModal('удалить')} title="Удалить"/>
                    <CustomButton type="submit" onClickHandler={() => setModal('изменить')} title="Изменить"/>
                </div>
            </TaskForm>
        </>
    );
}