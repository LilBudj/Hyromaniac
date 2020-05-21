import React, {useState, useEffect} from "react";
import {Fade} from "react-reveal"
import style from "./Horoscope.module.css"
import NavElement from "./NavElement";
import Promise from "./Promise";
import Cookies from "js-cookie"
import Popup from 'reactjs-popup'
import aquarius from "../../assets/outline_stroke_aquarius.png"
import aries from "../../assets/outline_stroke_aries.png"
import cancer from "../../assets/outline_stroke_cancer.png"
import capricorn from "../../assets/outline_stroke_capricorn.png"
import gemini from "../../assets/outline_stroke_gemini.png"
import libra from "../../assets/outline_stroke_libra.png"
import lion from "../../assets/outline_stroke_lion.png"
import pisces from "../../assets/outline_stroke_pisces.png"
import saggitarius from "../../assets/outline_stroke_saggitarius.png"
import scorpio from "../../assets/outline_stroke_scorpio.png"
import taurus from "../../assets/outline_stroke_taurus.png"
import virgo from "../../assets/outline_stroke_virgo.png"
import common from "../../assets/support_common.png"
import family from "../../assets/support_family.png"
import health from "../../assets/support_health.png"
import love from "../../assets/support_love.png"

let zodiacImg;
let zodiacName;

const singSwitch = () => {
    switch (Cookies.get('zodiac')) {
        case 'Aquarius': {
            zodiacImg = aquarius;
            zodiacName = 'Водолей';
            break
        }
        case 'Aries': {
            zodiacImg = aries;
            zodiacName = 'Овен';
            break
        }
        case 'Cancer': {
            zodiacImg = cancer;
            zodiacName = 'Рак';
            break
        }
        case 'Capricorn': {
            zodiacImg = capricorn;
            zodiacName = 'Козерог';
            break
        }
        case 'Gemini': {
            zodiacImg = gemini;
            zodiacName = 'Близнецы';
            break
        }
        case 'Libra': {
            zodiacImg = libra;
            zodiacName = 'Весы';
            break
        }
        case 'Lion': {
            zodiacImg = lion;
            zodiacName = 'Лев';
            break
        }
        case 'Pisces': {
            zodiacImg = pisces;
            zodiacName = 'Рыбы';
            break
        }
        case 'Sagittarius': {
            zodiacImg = saggitarius;
            zodiacName = 'Стрелец';
            break
        }
        case 'Scorpio': {
            zodiacImg = scorpio;
            zodiacName = 'Скорпион';
            break
        }
        case 'Taurus': {
            zodiacImg = taurus;
            zodiacName = 'Телец';
            break
        }
        case 'Virgo': {
            zodiacImg = virgo;
            zodiacName = 'Дева';
            break
        }
        default: {
            console.log('cookie-error')
        }
    }
};

const Horoscope = (props) => {
    useEffect(singSwitch, []);

    let [isPopup, setPopup] = useState(false);

    const changeSign = (sign) => {
        Cookies.set('zodiac', sign);
        singSwitch();
        setPopup(false);
        props.handleFetch()
    };

    return(
        <>{ isPopup &&
            <div className={style.popup}>
                <div className={style.innerPopup}>
                    <div className={style.popupText}>Выберите знак зодиака</div>
                    <div className={style.promises}>
                        <img src={aquarius} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Aquarius')}}/>
                        <img src={aries} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Aries')}}/>
                        <img src={capricorn} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Capricorn')}}/>
                        <img src={cancer} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Cancer')}}/>
                        <img src={gemini} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Gemini')}}/>
                        <img src={libra} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Libra')}}/>
                        <img src={lion} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Lion')}}/>
                        <img src={pisces} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Pisces')}}/>
                        <img src={saggitarius} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Sagittarius')}}/>
                        <img src={scorpio} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Scorpio')}}/>
                        <img src={taurus} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Taurus')}}/>
                        <img src={virgo} className={style.sign} alt={'zodiac'} onClick={() => {changeSign( 'Virgo')}}/>
                    </div>
                </div>
            </div>
        }
        <div className={style.container}>
            <Fade left>
            <div className={style.prepromise}>
                <img className={style.sign} src={zodiacImg} alt={'sign'} onClick={() => {setPopup(true)}}/>
                <div className={style.signText}>
                    <span>{zodiacName}</span>
                    <span style={{fontSize: '14px', opacity: '0.7', marginTop: '20px'}}>Гороскоп на Май 21, 2020</span>
                </div>
            </div>
            <div className={style.promises}>
                        <Promise text={props.firstPromise} img={common} name={'Общее'} style={{width: '150px', height:'120px'}}/>
                        <Promise text={props.secondPromise} img={family} name={'Семья'} style={{width: '150px', height:'130px'}}/>
                        <Promise text={props.thirdPromise} img={health} name={'Здоровье'} style={{width: '130px', height:'140px'}}/>
            </div>
            </Fade>
            <nav className={style.horoscopeNav}>
                <NavElement link={'/horoscope/Today'} navText={'Today'}/>
                <NavElement link={'/horoscope/Week'} navText={'Week'}/>
                <NavElement link={'/horoscope/Month'} navText={'Month'}/>
            </nav>
        </div>
            </>
    )
};

export default Horoscope