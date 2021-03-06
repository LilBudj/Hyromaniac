import style from "./Palmistry.module.css";
import PalmSign from "./PalmSIgn";
import React from "react";
import initHand from '../../assets/arm_option_3.png'
import thoughHand from '../../assets/tough.png'
import normalHand from '../../assets/average.png'
import flexHand from '../../assets/flexible.png'

const InitPalm = (props) => {
    return (
        <>
            <div className={style.session}>
                ГИБКОСТЬ РУКИ
            </div>
            <div className={style.belt}>
                <PalmSign link={'/palmistry/hard'} text={'though'} image={thoughHand}/>
                <PalmSign link={'/palmistry/average'} text={'normal'} image={normalHand}/>
                <PalmSign link={'/palmistry/flexible'} text={'flexible'} image={flexHand}/>
            </div>
            <div className={style.content}>

                <div className={style.underContainer}>
                <img className={style.initHand} src={initHand} alt={'hand'}/>
                    <div className={"d-flex flex-column justify-content-between align-items-center"}>
                <div className={style.text}>
                    {Buffer.from(props.data.first_step_two, 'base64').toString()}
                </div>
                <div className={style.text}>
                    Возьмите левую руку и выпрямите её как показано на рисунке.
                    Затем при помощи правой руки отогните её пальцы назад настолько,
                    насколько получится, не отгибая самой ладони, и выберите выше положение ладни,
                    которая у вас получилась.

                </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default InitPalm