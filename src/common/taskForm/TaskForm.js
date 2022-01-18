import React, {useState} from "react";
import style from "./TaskForm.module.css";

export function TaskForm({taskHandler, values, children}) {
    const [error, setError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        const {name, description} = Object.fromEntries(new FormData(e.target).entries());

        if (name.trim() !== '' && description.trim() !== '') {
            taskHandler(name, description);
            setError(false);
            document.taskForm.reset();
        } else {
            setError(true);
        }
    };

    return (
        <form id="taskForm" name="taskForm" onSubmit={onSubmit} className={style.form}>
            <div className={style.fields}>
                <div className={style.field}>
                    <label className={style.label}>Название</label>
                    <input
                        id="name"
                        name="name"
                        defaultValue={values.name}
                        className={style.input}
                    />
                </div>
                <div className={style.field}>
                    <label className={style.label}>Описание</label>
                    <textarea
                        id="description"
                        name="description"
                        defaultValue={values.description}
                        className={style.input}
                    />
                </div>
                <div className={style.error} style={{opacity: error ? 1 : 0}}>
                    <label className={style.errorText}>Все поля обязательны!</label>
                </div>
                {children}
            </div>
        </form>
    );
}