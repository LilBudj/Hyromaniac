import React from "react";
import style from "./MainPage.module.css"
import {NavLink} from "react-router-dom";

const ZodiacSign = (props) => {
    return(
        <div className={style.zodiac}>
            <NavLink className={style.zodiacButton} activeClassName={style.active} to={props.link}>
                <img className={style.zodiacImg} src={props.img} alt={'sign'}/>
                <div className={style.buttonText}>
                    {props.text}
                </div>
            </NavLink>
        </div>
    )
};

export default ZodiacSign