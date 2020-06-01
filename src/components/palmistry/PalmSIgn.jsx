import React from "react";
import style from "./Palmistry.module.css"
import {NavLink} from "react-router-dom";

const PalmSign = (props) => {
    return(
        <div className={style.palmSign}>
            <NavLink className={style.palmButton} activeClassName={style.active} to={props.link}>
                <img className={style.palmImg} src={props.image} alt={'sign'}/>
                <div className={style.palmText}>
                    {props.text}
                </div>
            </NavLink>
        </div>
    )
};

export default PalmSign