import React from "react";
import style from "./Tasks.module.css";
import {TaskItem} from "../taskItem/TaskItem";

export const Tasks = React.memo(({tasks, removeTaskHandler}) => {
    return (
        <div className={style.tasks}>
            {tasks.length
                ? tasks.map(el => {
                    return <TaskItem
                        key={el.id}
                        task={el}
                        removeTask={removeTaskHandler}
                    />
                })
                : <div className={style.noTask}>Задач нет...</div>
            }
        </div>
    );
})