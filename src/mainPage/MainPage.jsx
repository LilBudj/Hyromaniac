import React from "react";
import style from './MainPage.module.css'
import ZodiacSign from "./ZodiacSign";
import Header from "../components/header/Header";
import Today from "../components/horoscope/Today";
import {BrowserRouter, Route} from "react-router-dom";
import Aries from '../assets/aries.svg';
import Taurus from '../assets/taurus.svg';
import Gemini from '../assets/gemini.svg';
import Sagittarius from '../assets/sagittarius.svg';
import Capricorn from '../assets/capricorn.svg';
import Cancer from '../assets/cancer.svg';
import Libra from '../assets/libra.svg';
import Lion from '../assets/lion.svg';
import Pisces from '../assets/pisces.svg';
import Scorpio from '../assets/scorpio.svg';
import Aquarius from '../assets/aquarius.svg';
import Virgo from '../assets/virgo.svg';
import Palmistry from "../components/palmistry/Palmistry";
import PalmistryContainer from "../components/palmistry/PalmistryContainer";
import ForecastContainer from "../components/horoscope/ForecastContainer";
import {connect} from "react-redux";
import {activateFinger, activatePalm, setFingerLength, setPalmLength} from "../redux/palmReducer";
import Slider from "../components/utils/slider/Slider";
import CompatibilityContainer from "../components/compatibility/CompatibilityContainer";

const MainPage = () => {
    return(
        <div className={"d-flex flex-column align-items-center"} id={'main-page-container'} style={{
            width: '80vw',
            backgroundColor: '#ffffff',
            fontFamily: `Marcellus`,
        }}>
            <div className={style.background}>
                <Header/>
                <div className={style.signs}>
                    <span style={{fontSize: '28px', fontFamily: 'Marcellus', fontWeight: '600', textAlign: 'center'}}>Get advice from the Universe</span>
                    <span style={{fontSize: '14px'}}>Some text second</span>
                </div>
                <button className={style.button}>
                    Get your future
                </button>
            </div>
            <div className={style.content}>
                <Route exact path={'/sagittarius'} render={() => <ForecastContainer zodiac={'Sagittarius'}/>}/>
                <Route exact path={'/scorpio'} render={() => <ForecastContainer zodiac={'Scorpio'}/>}/>
                <Route exact path={'/capricorn'} render={() => <ForecastContainer zodiac={'Capricorn'}/>}/>
                <Route exact path={'/libra'} render={() => <ForecastContainer zodiac={'Libra'}/>}/>
                <Route exact path={'/lion'} render={() => <ForecastContainer zodiac={'Lion'}/>}/>
                <Route exact path={'/gemini'} render={() => <ForecastContainer zodiac={'Gemini'}/>}/>
                <Route exact path={'/pisces'} render={() => <ForecastContainer zodiac={'Pisces'}/>}/>
                <Route exact path={'/cancer'} render={() => <ForecastContainer zodiac={'Cancer'}/>}/>
                <Route exact path={'/aries'} render={() => <ForecastContainer zodiac={'Aries'}/>}/>
                <Route exact path={'/taurus'} render={() => <ForecastContainer zodiac={'Taurus'}/>}/>
                <Route exact path={'/virgo'} render={() => <ForecastContainer zodiac={'Virgo'}/>}/>
                <Route exact path={'/aquarius'} render={() => <ForecastContainer zodiac={'Aquarius'}/>}/>
                <Route exact path={'/'} render={() => <ForecastContainer zodiac={'Aries'}/>}/>
                <Route exact path={'/compatibility'} render={() => <CompatibilityContainer/>}/>
            </div>
        </div>
    )
};

export default MainPage