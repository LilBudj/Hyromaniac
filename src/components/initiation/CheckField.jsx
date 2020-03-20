import React from "react";
import style from "./CheckField.module.css"
import check from "../../assets/check.svg"

const CheckField = (props) => {

    return(
        <div onClick={() => {props.setter(props.value)}} className={style.container}>
            <span className={style.text}>{props.text}</span>
            {props.isActive && <img src={check} className={style.image} alt={'check'}/>}
        </div>
    )
};

export default CheckField