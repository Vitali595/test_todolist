import React from "react";
import style from "./CustomButton.module.css";

export function CustomButton({title, onClickHandler = () => {}, type = 'button', disabled = false}) {
    return (
      <button
          type={type}
          className={style.customButton}
          onClick={() => onClickHandler()}
          disabled={disabled}
      >{title}</button>
    );
}