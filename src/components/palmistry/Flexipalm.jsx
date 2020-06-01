import React from "react";
import style from "./Palmistry.module.css";
import {NavLink} from "react-router-dom";
import {Fade} from "react-reveal";

const Flexipalm = (props) => {
    return(
        <div className={"d-flex flex-column justify-content-around align-items-center"} style={{height: '90vh'}}>
            <Fade left>
            <div className={style.text}>
                {Buffer.from(props.data.first, 'base64').toString('utf-8')}
            </div>
            <div className={style.text}>
                {Buffer.from(props.data.second, 'base64').toString('utf-8')}
            </div>
            <div className={style.text}>
                {Buffer.from(props.data.third, 'base64').toString('utf-8')}
            </div>
            <NavLink className={style.link} to={props.link}><button className={style.button}>Продолжить</button></NavLink>
            </Fade>
        </div>
    )
};

export default Flexipalm