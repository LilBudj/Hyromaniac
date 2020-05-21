import React, {useState, useEffect} from "react";
import style from "./Initiation.module.css"
import Button from "../Button/Button";
import {Fade} from "react-reveal";
import CheckField from "./CheckField";
import {eventAPI} from "../../amplitude/API";
import {NavLink} from "react-router-dom";

const Payment = () => {

    useEffect(() => {
        eventAPI.mountEvent("last page loaded")
    }, []);

    const [checkStatus, setCheckStatus] = useState(0);

    return(
        <div className={"d-flex flex-column justify-content-sm-around align-items-center h-100 w-100"}>
            <Fade left>
            <div className={style.header}>
                <h1 className={style.headText}>Скачивайте наше приложение</h1>
            </div>
                <div className={style.content}>
            <ul className={style.list}>
                <li>Личные предсказания</li>
                <li>Гадание по ладони</li>
                <li>Обратная связь</li>
                <li>Сканнер ладони</li>
            </ul>
                    <div className={style.payment}>
                    <CheckField text={'Пробный период'} isActive={checkStatus === 0} setter={setCheckStatus} value={0}/>
                    <CheckField text={'Месячная подписка'} isActive={checkStatus === 1} setter={setCheckStatus} value={1}/>
                    </div>
                </div>
            <div className={style.payment}>
                <NavLink to={'/horoscope/Today'}><Button text={'Перейти к приложению'}/></NavLink>
            </div>
            </Fade>
        </div>
    )
};

export default Payment