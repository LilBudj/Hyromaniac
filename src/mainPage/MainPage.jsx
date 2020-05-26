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

const MainPage = () => {
    return(
        <div className={style.container}>
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
                <Route exact path={'/sagittarius'} render={() => <Today zodiac={'Sagittarius'}/>}/>
                <Route exact path={'/scorpio'} render={() => <Today zodiac={'Scorpio'}/>}/>
                <Route exact path={'/capricorn'} render={() => <Today zodiac={'Capricorn'}/>}/>
                <Route exact path={'/libra'} render={() => <Today zodiac={'Libra'}/>}/>
                <Route exact path={'/lion'} render={() => <Today zodiac={'Lion'}/>}/>
                <Route exact path={'/gemini'} render={() => <Today zodiac={'Gemini'}/>}/>
                <Route exact path={'/pisces'} render={() => <Today zodiac={'Pisces'}/>}/>
                <Route exact path={'/cancer'} render={() => <Today zodiac={'Cancer'}/>}/>
                <Route exact path={'/aries'} render={() => <Today zodiac={'Aries'}/>}/>
                <Route exact path={'/taurus'} render={() => <Today zodiac={'Taurus'}/>}/>
                <Route exact path={'/virgo'} render={() => <Today zodiac={'Virgo'}/>}/>
                <Route exact path={'/aquarius'} render={() => <Today zodiac={'Aquarius'}/>}/>
                <Route exact path={'/'} render={() => <Today zodiac={'Aries'}/>}/>

            </div>
        </div>
    )
};

export default MainPage