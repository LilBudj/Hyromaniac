import React from "react";
import style from "./Slider.module.css";
import Portal from "../Portal";

const Slider = (props) => {
    return(
        <Portal>
        <div className={style.sliderContainer}>
            <div className={style.sliderBar}>
            <input type={'range'} {...props}/>
                <span className={style.value}>{props.value}</span>
            <span className={style.toggler} onClick={props.toggler}>OK</span>
            </div>
        </div>
        </Portal>
    )
};

export default Slider