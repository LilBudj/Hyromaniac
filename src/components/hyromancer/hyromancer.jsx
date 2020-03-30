import React from "react";
import style from "./hyromancer.module.css"
import {NavLink} from "react-router-dom";
import {Fade} from "react-reveal";
import chiromancer from "../../assets/chyromancer.png"
import toDo from "../../assets/todoImg.png"
import sun from "../../assets/солнышко.png"
import palm from "../../assets/рука.png"

const Hyromancer = () => {
    return(
        <div className={style.container}>
            <Fade left>
            <div className={style.themeHeader}>
                <img src={chiromancer} className={style.hyromancer}>
                </img>
                <div className={style.message}>
                    Хиромант приветствует вас и готов приоткрыть тайну ваших рук
                </div>
            </div>
            <div className={style.mainContent}>
                <div className={style.warning}>
                    <img src={toDo} className={style.warnImage}>

                    </img>
                    <div className={style.warnMessage}>
                        Сеанс чтения ладони состоит из нескольких этапов, которые
                        вы должны проходить один зп другим, а не пропускать их
                    </div>
                </div>
                <div className={style.warning}>
                    <div className={style.warnMessage}>
                        Обратите особое внимание на освещение
                    </div>
                    <img src={sun} className={style.warnImage} alt={'sun'}/>
                </div>
                <div className={style.warning}>
                    <img src={palm} className={style.warnImage}>

                    </img>
                    <div className={style.warnMessage}>
                        Какие бы результаты вы ни получили, следует помнить, что только
                        вы сами являетесь хозяином своей судьбы, а ваши ладони только отображают
                        избранные вами варианты
                    </div>
                </div>
            </div>
                <NavLink to={'/payment'}><button className={style.unique}>Начать Сеанс</button></NavLink>
            </Fade>
        </div>
    )
};

export default Hyromancer