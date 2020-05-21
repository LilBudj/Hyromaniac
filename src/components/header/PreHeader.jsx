import React from "react";
import style from "./Preheader.module.css";
import {NavLink} from "react-router-dom";
import logo from "../../assets/45625425_l.jpg"

const PreHeader = () => {
    return(
        <div className={style.preHeader}>
            <NavLink to={'/'}><span>main</span></NavLink>
            <NavLink to={'/horoscope/Today'}><span>horoscope</span></NavLink>
        </div>
    )
};

export default PreHeader