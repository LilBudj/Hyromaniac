import React from "react";
import style from "./hyromancer.module.css";
import {NavLink} from "react-router-dom";
import {Fade} from "react-reveal";
import chiromancer from "../../assets/chyromancer.png";
import toDo from "../../assets/todoImg.png";
import sun from "../../assets/солнышко.png";
import palm from "../../assets/рука.png";
import button from "../../assets/кнопка.png";

const Hyromancer = () => {
    return(
        <div style={{backgroundImage: '../../assets/background.png',
            backgroundColor: '#252633', height: '175vh', padding: '10%'}}
             className={"d-flex flex-column justify-content-around align-items-center align-self-center w-100"}>
            <Fade left>
                <div className={style.headMessage}>
                    Добро пожаловать в гид по линиям ваших ладоней
                </div>
            <div className={style.themeHeader}>
                <img src={chiromancer} className={style.hyromancer}>
                </img>
                <div className={style.message}>
                    Начнем?
                </div>
            </div>
            <div className={style.mainContent}>
                <div className={style.warning}>
                    <img src={toDo} className={style.warnImageTodo} alt={'todo'}>

                    </img>
                    <div className={style.warnMessage}>
                        Сеанс чтения ладони состоит из нескольких этапов, которые
                        вы должны проходить один за другим, а не пропускать их.
                    </div>
                </div>
                <div className={style.warning}>
                    <div className={style.warnMessage}>
                        Обратите особое внимание на освещение,
                        в комнате должно быть достаточно светло, идеально подойдет солнечный свет.
                    </div>
                    <img src={sun} className={style.warnImage} alt={'sun'}/>
                </div>
                <div className={style.borderLine}/>
                <div className={style.lastWarning}>
                    <img src={palm} className={style.warnImageHand}>

                    </img>
                    <div style={{width: '100%'}} className={style.warnMessage}>
                        Какие бы результаты вы ни получили, следует помнить, что только
                        вы сами являетесь хозяином своей судьбы, а ваши ладони только отображают
                        избранные вами варианты. Если линии на вашей ладони предрекают вам неудачу,
                        подумайте об изменении своего отношения к жизни, и вы увидите как образ на вашей ладони начнет менятся.
                    </div>
                </div>
            </div>
                <div>
                <NavLink to={'/'}><img src={button} className={style.unique} alt={'button'}/></NavLink>
                </div>
            </Fade>
        </div>
    )
};

export default Hyromancer