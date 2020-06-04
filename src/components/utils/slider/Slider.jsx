import React from "react";
import style from "./Slider.module.css";

const Slider = (props) => {
    debugger
    return(
        <div className={style.sliderContainer}>
            <input type={'range'} {...props}/>
        </div>
    )
};

export default Slider