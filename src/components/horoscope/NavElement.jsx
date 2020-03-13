import React from "react";
import style from "./Horoscope.module.css"
import {NavLink} from "react-router-dom";

const NavElement = (props) => {
    return(
        <div className={style.navElement}>
            <NavLink to={'/horoscope'} className={style.navText} activeClassName={style.active}>
                <span>{props.navText}</span>
            </NavLink>
        </div>
    )
};

export default NavElement