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
                        <Promise text={'gjdjoijroifoisfjsfdifjiosjfsoijf'}/>
                        <Promise text={'gjdjoijroifoisfjsfdifjiosjfsoijf'}/>
                        <Promise text={'gjdjoijroifoisfjsfdifjiosjfsoijf'}/>
            </div>
            <nav className={style.horoscopeNav}>
                <NavElement navText={'Today'}/>
                <NavElement navText={'Week'}/>
                <NavElement navText={'Month'}/>
            </nav>
        </div>
    )
};

export default Horoscope