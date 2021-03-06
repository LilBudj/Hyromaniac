import React from "react";
import style from "./Horoscope.module.css"

const Promise = (props) => {
    return(
        <div className={style.promise}>
            <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
            <img src={props.img} style={props.style} alt={'sign'}/>
            <div className={style.signName}>
                {props.name}
            </div>
            </div>
            <div className={style.promiseText}>
                {props.text}
            </div>
        </div>
    )
};

export default Promise