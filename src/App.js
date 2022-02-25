import React from "react";
import style from "./App.module.css";
import {Todolist} from "./todolist/Todolist";
import {HashRouter} from "react-router-dom";

function App() {
    return <>
        <HashRouter>
            <div className={style.app}>
                <Todolist/>
                <>nj</>
            </div>
        </HashRouter>
    </>
}

export default App;
