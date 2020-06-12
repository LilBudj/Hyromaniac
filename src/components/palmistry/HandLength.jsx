import React, {useState} from "react";
import style from "./Palmistry.module.css"
import {NavLink} from "react-router-dom";
import squareHand from "../../assets/img7.png";
import longHand from "../../assets/img8.png";
import Slider from "../utils/slider/Slider";
import {connect} from "react-redux";
import {activateFinger, activatePalm, calculateHandType, setFingerLength, setPalmLength} from "../../redux/palmReducer";

const HandLength = (props) => {

    return(
        <>
        {props.isFingerActive && <Slider min={'30'} max={'120'} range={'1'} value={props.fingerLength} toggler={props.activateFinger} onChange={(e) => props.setFingerLength(e.currentTarget.value)}/>}
        {props.isPalmActive && <Slider min={'30'} max={'120'} range={'1'} value={props.palmLength} toggler={props.activatePalm} onChange={(e) => props.setPalmLength(e.currentTarget.value)}/>}
        <div>
            <div style={{height: '100vh'}} className={style.content}>

                <div style={{marginTop: '5vh'}} className={style.session}>
                    Длина руки
                </div>
                <div className={"d-flex justify-content-around align-items-center h-50 w-80"}>
                    <img onClick={props.activatePalm}
                        className={style.handImg} src={squareHand} alt={'hand'}/>
                    <img onClick={props.activateFinger}
                        className={style.handImg} src={longHand} alt={'hand'}/>
                </div>
                <div className={"d-flex flex-column justify-content-between align-items-center h-50"}>
                    <div className={style.text}>
                        {Buffer.from(props.data.how_long_fingers_first, 'base64').toString()}
                    </div>
                    <div className={style.text}>
                        {Buffer.from(props.data.how_long_determine_second, 'base64').toString()}
                    </div>
                </div>
                <NavLink className={style.link} to={'/palmistry/length/average'}><button className={style.button} onClick={() => props.calculateHandType(props.palmShape, props.fingerLength)}>Продолжить</button></NavLink>
            </div>
        </div>
            </>
    )
};

let mapStateToProps = (state) => ({
    isFingerActive: state.palmReducer.sliderActivations.isFingerActive,
    isPalmActive: state.palmReducer.sliderActivations.isPalmActive,
    fingerLength: state.palmReducer.palmMeasures.fingerLength,
    palmLength: state.palmReducer.palmMeasures.palmLength,
    palmShape: state.palmReducer.palmMeasures.palmShape
});

export default connect(mapStateToProps, {
    activateFinger,
    activatePalm,
    setFingerLength,
    setPalmLength,
    calculateHandType
})(HandLength)