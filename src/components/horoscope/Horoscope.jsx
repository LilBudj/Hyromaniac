import React from "react";
import style from "./Horoscope.module.css"
import NavElement from "./NavElement";

const Horoscope = (props) => {
    return(
        <div className={style.container}>
            <div className={style.promises}>
                <div className={style.promise}>
                    <div>

                    </div>
                </div>
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