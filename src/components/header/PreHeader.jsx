import React from "react";
import style from "./Preheader.module.css";

const PreHeader = () => {
    return(
        <div className={style.preHeader}>
            <img className={style.logo} alt={'logo'}/>
        </div>
    )
};

export default PreHeader