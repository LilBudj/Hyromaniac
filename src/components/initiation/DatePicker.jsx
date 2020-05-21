import React, {useEffect} from "react";
import style from '../hyromancer/hyromancer.module.css'
import {DatePicker} from "antd";
import moment from "moment";
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
import Button from "../Button/Button";
import {Fade} from "react-reveal";
import {NavLink} from "react-router-dom";
import {eventAPI} from "../../amplitude/API"
import Cookies from 'js-cookie'

const signAlgorithm = (day, month, setter) => {
    if ((month === 1 && day>=20) || (month===2 && day<=18)) {setter(aquarius); Cookies.set('zodiac', 'Aquarius')}
    else if ((month === 2 && day>=19) || month===3 && day<=20) {setter(pisces); Cookies.set('zodiac', 'Pisces')}
    else if ((month === 3 && day>=21) || month===4 && day<=19) {setter(aries); Cookies.set('zodiac', 'Aries')}
    else if ((month===4 && day>=20) || month===5 && day<=20) {setter(taurus); Cookies.set('zodiac', 'Taurus')}
    else if ((month===5 && day>=21) || month===6 && day<=21) {setter(gemini); Cookies.set('zodiac', 'Gemini')}
    else if (month===6 && day>=22 || month===7 && day<=22) {setter(cancer); Cookies.set('zodiac', 'Cancer')}
    else if (month===7 && day>=23 || month===8 && day<=22) {setter(lion); Cookies.set('zodiac', 'Lion')}
    else if (month===8 && day>=23 || month===9 && day<=22) {setter(virgo); Cookies.set('zodiac', 'Virgo')}
    else if (month===9 && day>=23 || month===10 && day<=22) {setter(libra); Cookies.set('zodiac', 'Libra')}
    else if (month===10 && day>=23 || month===11 && day<=21) {setter(scorpio); Cookies.set('zodiac', 'Scorpio')}
    else if (month===11 && day>=22 || month===12 && day<=21) {setter(saggitarius); Cookies.set('zodiac', 'Sagittarius')}
    else if (month===12 && day>=22 || month===1 && day<=19) {setter(capricorn); Cookies.set('zodiac', 'Capricorn')}
};

const clickEvent = () => {
    eventAPI.clickEvent("second button clicked")
};
const dateEvent = () => {
    eventAPI.clickEvent("date picked")
};

const BirthDatePicker = (props) => {

    useEffect(() => {
        eventAPI.mountEvent("second page loaded")
        Cookies.set('zodiac', 'Aquarius')
    }, []);

    const [selectedDate, setSelectedDate] = React.useState(moment('2000-01-01', 'YYYY-MM-DD'));
    const [zodiak, setZodiak] = React.useState(aquarius);

    const handleDateChange = date => {
        setSelectedDate(moment(date));
        signAlgorithm(
            moment(date).date(),
            moment(date).month() + 1,
            setZodiak
        );
        console.dir(moment(date).date());
        console.dir(moment(date).month())
    };

    //"d-flex flex-column justify-content-around align-items-center align-self-center h-100"

    return(
        <div className={"d-flex flex-column justify-content-around align-items-center align-self-center h-100"}>
            <Fade left>
            <div className={style.content}>
                <h2 className={style.headLine}>Выберите свою дату рождения</h2>
                <div className={style.datePicker}>
                <img src={zodiak} alt={'sign'} className={style.zodiak}/>
                <DatePicker defaultValue={selectedDate} onChange={handleDateChange} onBlur={dateEvent}/>
                </div>
            </div>
            <div className={style.dateButton}>
                <NavLink to={'/hyromancer'}><Button text={'Начать'} onClick={clickEvent}/></NavLink>
            </div>
            </Fade>
        </div>
    )
};

export default BirthDatePicker