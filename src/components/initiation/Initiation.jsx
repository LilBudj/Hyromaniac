import React, {useEffect} from "react";
import {Fade} from "react-reveal"
import "date-fns"
import style from "./Initiation.module.css"
import initImage from "../../assets/invitation_image_mystic.png"
import Button from "../Button/Button"
import {NavLink} from "react-router-dom";
import content from "../../assets/palmistry.png"
import {eventAPI} from "../../amplitude/API"

const trackClick = () => {
    eventAPI.clickEvent("first button clicked")
};

const Initiation = () => {

    useEffect(() => {
        eventAPI.mountEvent("init page loaded")
    }, []);

    return (
        <div className={style.container}>
            <Fade left>
                <div className={style.initiateImgContainer}>
                    <img src={initImage} className={style.initiateImg} alt={'init'}/>
                    <div className={style.initMessage}>
                        <span className={style.greetings}>Гороскоп</span>
                        <div className={style.belowGreet}>Предсказания и гадание на руке онлайн</div>
                        <img className={style.contentImage} src={content} alt={'content'}/>
                    </div>
                </div>

                <div className={style.initForm}>
                    <NavLink to={'/init'}><Button text={'continue'} onClick={trackClick}/></NavLink>
                </div>
            </Fade>
        </div>
    )
};

export default Initiation