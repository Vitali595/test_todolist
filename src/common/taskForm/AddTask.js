import React from "react";
import style from "./TaskForm.module.css";
import {CustomButton} from "../customButton/CustomButton";
import {TaskForm} from "./TaskForm";

export function AddTask({addTask}) {
    return (
        <TaskForm taskHandler={addTask} values={{name: '', description: ''}}>
            <div className={style.button}>
                <CustomButton title="Добавить" type="submit"/>
            </div>
        </TaskForm>
    );
}