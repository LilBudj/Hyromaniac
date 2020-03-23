import React, {useState, useEffect} from "react";
import style from "./Initiation.module.css"
import {Button} from "@material-ui/core";
import {Fade} from "react-reveal";
import CheckField from "./CheckField";
import {eventAPI} from "../../amplitude/API";

const Payment = () => {

    useEffect(() => {
        eventAPI.mountEvent("last page loaded")
    }, []);

    const [checkStatus, setCheckStatus] = useState(0);

    return(
        <div className={style.container}>
            <Fade left>
            <div className={style.header}>
                <h1>PREMIUM VERSION</h1>
            </div>
                <div className={style.content}>
            <ul className={style.list}>
                <li>Личные предсказания</li>
                <li>Гадание по ладони</li>
                <li>Обратная связь</li>
                <li>Сканнер ладони</li>
            </ul>
                    <div className={style.payment}>
                    <CheckField text={'пробный период'} isActive={checkStatus === 1} setter={setCheckStatus} value={1}/>
                    <CheckField text={'пробный период'} isActive={checkStatus === 2} setter={setCheckStatus} value={2}/>
                    </div>
                </div>
            <div className={style.payment}>
                <Button variant={'contained'} color={'primary'}>Продолжить</Button>
            </div>
            </Fade>
        </div>
    )
};

export default Payment