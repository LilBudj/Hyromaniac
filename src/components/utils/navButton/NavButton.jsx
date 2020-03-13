import React from "react";
import style from "./NavButton.module.css"
import {NavLink} from "react-router-dom";

const NavButton = (props) => {
    return(
        <div className={style.main}>
            <NavLink to={props.link}>
                <div className={style.container}>
                    <img src={props.label} alt={'label'} className={style.image}/>
                    <span className={style.text}>{props.text}</span>
                </div>
            </NavLink>
        </div>
    )
};

export default NavButton