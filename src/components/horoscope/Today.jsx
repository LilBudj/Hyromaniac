import React, {useEffect, useState} from "react";
import Horoscope from "./Horoscope";
import {horoscopeAPI} from "../../api/endpointAPI";
import Cookies from 'js-cookie'
import style from "../../mainPage/MainPage.module.css";
import ZodiacSign from "../../mainPage/ZodiacSign";
import Aries from "../../assets/aries.png";
import Taurus from "../../assets/taurus.png";
import Gemini from "../../assets/gemini.png";
import Cancer from "../../assets/cancer.png";
import Lion from "../../assets/lion.png";
import Virgo from "../../assets/virgo.png";
import Libra from "../../assets/libra.png";
import Scorpio from "../../assets/scorpio.png";
import Sagittarius from "../../assets/sagittarius.png";
import Capricorn from "../../assets/capricorn.png";
import Aquarius from "../../assets/aquarius.png";
import Pisces from "../../assets/pisces.png";

const Today = (props) => {

    const handleFetch = () => {
        setIsLoading(true);
        horoscopeAPI.getDailyForecast(props.zodiac)
            .then(res => {
                fetchForecasts(res.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    };

    useEffect(handleFetch, []);

    let [forecasts, fetchForecasts] = useState(['...', '...', '...']);
    let [isLoading, setIsLoading] = useState(true);

    return <div className={"d-flex flex-column align-items-center"}>
        <div className={style.belt}>
            <ZodiacSign link={'/aries'} text={'Aries'} img={Aries}/>
            <ZodiacSign link={'/taurus'} text={'Taurus'} img={Taurus}/>
            <ZodiacSign link={'/gemini'} text={'Gemini'} img={Gemini}/>
            <ZodiacSign link={'/cancer'} text={'Cancer'} img={Cancer}/>
            <ZodiacSign link={'/lion'} text={'Lion'} img={Lion}/>
            <ZodiacSign link={'/virgo'} text={'Virgo'} img={Virgo}/>
            <ZodiacSign link={'/libra'} text={'Libra'} img={Libra}/>
            <ZodiacSign link={'/scorpio'} text={'Scorpio'} img={Scorpio}/>
            <ZodiacSign link={'/sagittarius'} text={'Sagittarius'} img={Sagittarius}/>
            <ZodiacSign link={'/capricorn'} text={'Capricorn'} img={Capricorn}/>
            <ZodiacSign link={'/aquarius'} text={'Aquarius'} img={Aquarius}/>
            <ZodiacSign link={'/pisces'} text={'Pisces'} img={Pisces}/>
        </div>
        <Horoscope firstPromise={forecasts[0]}
                   secondPromise={forecasts[1]}
                   thirdPromise={forecasts[2]}
                   handleFetch={handleFetch}
                   isLoading={isLoading}
                   zodiacSign={props.zodiac}/>
    </div>
};

export default Today