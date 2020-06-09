import React from "react";
import style from 'Compatibility.module.css'
import Portal from "../utils/Portal";
import {connect} from "react-redux";
import {setSecondZodiac} from "../../redux/compatibilityReducer";
import aquarius from "../../assets/outline_stroke_aquarius.png";
import aries from "../../assets/outline_stroke_aries.png";
import capricorn from "../../assets/outline_stroke_capricorn.png";
import cancer from "../../assets/outline_stroke_cancer.png";
import gemini from "../../assets/outline_stroke_gemini.png";
import libra from "../../assets/outline_stroke_libra.png";
import lion from "../../assets/outline_stroke_lion.png";
import pisces from "../../assets/outline_stroke_pisces.png";
import saggitarius from "../../assets/outline_stroke_saggitarius.png";
import scorpio from "../../assets/outline_stroke_scorpio.png";
import taurus from "../../assets/outline_stroke_taurus.png";
import virgo from "../../assets/outline_stroke_virgo.png";

const Modal = (props) => {
    return(
        <Portal>
            <div className={style.modalOverlay}>
                <div className={style.modalWindow}>
                    <div className={style.popupText}>Выберите знак зодиака</div>
                    <div className={style.promises}>
                        <img src={aquarius} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Aquarius')}}/>
                        <img src={aries} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Aries')}}/>
                        <img src={capricorn} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Capricorn')}}/>
                        <img src={cancer} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Cancer')}}/>
                        <img src={gemini} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Gemini')}}/>
                        <img src={libra} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Libra')}}/>
                        <img src={lion} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Lion')}}/>
                        <img src={pisces} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Pisces')}}/>
                        <img src={saggitarius} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Sagittarius')}}/>
                        <img src={scorpio} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Scorpio')}}/>
                        <img src={taurus} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Taurus')}}/>
                        <img src={virgo} className={style.sign} alt={'zodiac'} onClick={() => {props.setSecondZodiac( 'Virgo')}}/>
                    </div>
                </div>
            </div>
        </Portal>
    )
};

export default connect(null, {
    setSecondZodiac
})(Modal)