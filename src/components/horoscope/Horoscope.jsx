import React from "react";
import style from "./Horoscope.module.css"
import NavElement from "./NavElement";
import Promise from "./Promise";

const Horoscope = (props) => {
    return(
        <div className={style.container}>
            <div className={style.prepromise}>
                <div className={style.sign}>
                </div>
                <div className={style.signText}>

                </div>
            </div>
            <div className={style.promises}>
                        <Promise text={props.firstPromise}/>
                        <Promise text={props.secondPromise}/>
                        <Promise text={props.thirdPromise}/>
            </div>
            <nav className={style.horoscopeNav}>
                <NavElement link={'/horoscope/Today'} navText={'Today'}/>
                <NavElement link={'/horoscope/Week'} navText={'Week'}/>
                <NavElement link={'/horoscope/Month'} navText={'Month'}/>
            </nav>
        </div>
    )
};

export default Horoscope