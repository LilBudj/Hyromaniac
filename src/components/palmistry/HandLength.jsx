import React from "react";
import style from "./Palmistry.module.css"
import {NavLink} from "react-router-dom";
import squareHand from "../../assets/img5.png";
import longHand from "../../assets/img6.png";

const HandLength = () => {
    return(
        <div>
            <div className={style.content}>
                <div style={{marginBottom: '5vh', marginTop: '5vh'}} className={style.session}>
                    Форма руки
                </div>
                <div className={"d-flex flex-column justify-content-between align-items-center h-50"}>
                    <div className={style.text}>
                        {Buffer.from(props.data.how_determine_form_arm, 'base64').toString()}
                    </div>
                    <div className={style.text}>
                        {Buffer.from(props.data.square_hand_form, 'base64').toString()}
                    </div>
                </div>
                <div className={"d-flex justify-content-around align-items-center h-50 w-80"}>
                    <NavLink to={'/palmistry/shape/square'}><img className={style.handImg} src={squareHand} alt={'hand'}/></NavLink>
                    <NavLink to={'/palmistry/shape/long'}><img className={style.handImg} src={longHand} alt={'hand'}/></NavLink>
                </div>
            </div>
        </div>
    )
};

export default HandLength