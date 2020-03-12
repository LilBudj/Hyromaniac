import React from "react";
import style from "./NavButton.module.css"
import {NavLink} from "react-router-dom";

const NavButton = (props) => {
    return(
        <div className={style.main}>
            <NavLink to={props.link}><button className={style.button}>{props.label}</button></NavLink>
        </div>
    )
};

export default NavButton