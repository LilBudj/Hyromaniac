import style from "./Palmistry.module.css";
import {NavLink} from "react-router-dom";
import squareHand from "../../assets/img5.png";
import longHand from "../../assets/img6.png";
import React from "react";

const LinePalm = (props) => {
    return(
        <div className={style.content}>
            <div style={{marginBottom: '5vh', marginTop: '5vh'}} className={style.session}>
                Форма руки
            </div>
            <div className={style.handSection}>
                <NavLink to={props.firstLink}><img className={style.handImg} src={props.img1} alt={'hand'}/></NavLink>
                <NavLink to={props.secondLink}><img className={style.handImg} src={props.img2} alt={'hand'}/></NavLink>
                {!!props.img3 && <NavLink to={props.thirdLink}><img className={style.handImg} src={props.img3} alt={'hand'}/></NavLink>}
            </div>
            <div className={"d-flex flex-column justify-content-between align-items-center h-50"}>
                <div className={style.text}>
                    {Buffer.from(props.data.first, 'base64').toString()}
                </div>
                <div className={style.text}>
                    {Buffer.from(props.data.second, 'base64').toString()}
                </div>
                <div className={style.text}>
                    {Buffer.from(props.data.third, 'base64').toString()}
                </div>
            </div>
        </div>
    )
};

export default LinePalm