import React, {useEffect, useState, useCallback} from "react";
import style from "./Todolist.module.css";
import {AddTask} from "../common/taskForm/AddTask";
import {Redirect, Route, Switch} from "react-router-dom";
import {ChangeTask} from "../common/taskForm/ChangeTask";
import {Tasks} from "./tasks/Tasks";
import {getLocalStorage, randomNumber, setLocalStorage} from "../helpers/helpers";

export function Todolist() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(getLocalStorage() || []);
    }, [])

    const removeTaskHandler = useCallback((taskId) => {
        const filteredTasks = tasks.filter(({id}) => +id !== +taskId);

        setTasks(filteredTasks);
        setLocalStorage(filteredTasks);
    }, [tasks]);

    const addTaskHandler = useCallback((name, description) => {
        const newTask = {
            id: randomNumber(),
            name,
            description,
        };

        setTasks([...tasks, newTask]);
        setLocalStorage([...tasks, newTask]);
    }, [tasks]);

    const changeTaskHandler = useCallback((changedTask) => {
        const changedTasks = tasks.map(el => +el.id === +changedTask.id ? changedTask : el);

        setTasks(changedTasks);
        setLocalStorage(changedTasks);
    }, [tasks]);

    return (
        <>
            <div className={style.todolist}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/todolist"/>
                    </Route>
                    <Route exact path="/todolist">
                        <>
                            <AddTask addTask={addTaskHandler}/>
                            <Tasks tasks={tasks} removeTaskHandler={removeTaskHandler}/>
                        </>
                    </Route>
                    <Route exact path="/todolist/change/:id">
                        {routeProps => {
                            const taskId = +routeProps.match.params.id;
                            const task = tasks.find(({id}) => +id === taskId) || {};

                            return <ChangeTask
                                changeTask={changeTaskHandler}
                                removeTask={removeTaskHandler}
                                task={task}/>;
                        }}
                    </Route>
                </Switch>
            </div>
        </>
    );
}