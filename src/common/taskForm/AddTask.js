import React from "react";
import style from "./TaskForm.module.css";
import {CustomButton} from "../customButton/CustomButton";
import {TaskForm} from "./TaskForm";

export const AddTask = React.memo(({addTask}) => {
    return (
        <TaskForm taskHandler={addTask} values={{name: '', description: ''}}>
            <div className={style.button}>
                <CustomButton title="Добавить" type="submit"/>
            </div>
        </TaskForm>
    );
});