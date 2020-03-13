import React from "react";
import style from "./Horoscope.module.css"

const Promise = (props) => {
    return(
        <div className={style.promise}>
            <div className={style.sign}>
                {props.sign}
            </div>
            <div className={style.signName}>
                {props.name}
            </div>
            <div className={style.promiseText}>
                {props.text}
            </div>
        </div>
    )
};

export default Promise