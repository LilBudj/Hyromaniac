import React from "react";
import {Fade} from "react-reveal"
import "date-fns"
import style from "./Initiation.module.css"
import initImage from "../../assets/invitation_image_mystic.png"
import {Button, withStyles} from "@material-ui/core"
import {NavLink} from "react-router-dom";
import content from "../../assets/content_image.png"

const Initiation = () => {

    return (
        <div className={style.container}>
            <Fade left>
                <div className={style.initiateImgContainer}>
                    <img src={initImage} className={style.initiateImg} alt={'init'}/>
                    <div className={style.initMessage}>
                        <span className={style.greetings}>Greetings</span>
                        <div className={style.belowGreet}>divination and palm reading</div>
                        <div className={style.signText1}>ЕЖЕДНЕВНЫЙ ГОРОСКОП</div>
                        <div className={style.signText2}>ЛЮБОВНЫЙ ГОРОСКОП</div>
                        <div className={style.signText3}>КОНСУЛЬТАЦИИ АСТРОЛОГА</div>
                        <div className={style.signText4}>ЛИЧНЫЙ ГОРОСКОП</div>
                        <div className={style.signText5}>ПРЕДСКАЗАТЕЛЬ СУДЬБЫ</div>
                        <img className={style.contentImage} src={content} alt={'content'}/>
                    </div>
                </div>

                <div className={style.initForm}>
                    <NavLink to={'/init'}><Button variant={'contained'} color={'primary'}>Get
                        started</Button></NavLink>
                </div>
            </Fade>
        </div>
    )
};

export default Initiation