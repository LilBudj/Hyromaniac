import React from "react";
import style from "./hyromancer.module.css"
import {Button} from "@material-ui/core"
import {NavLink} from "react-router-dom";
import {Fade} from "react-reveal";

const Hyromancer = () => {
    return(
        <div className={style.container}>
            <Fade left>
            <div className={style.themeHeader}>
                <div className={style.hyromancer}>

                </div>
                <div className={style.message}>
                    yoyoyoyoyoyoyoyoyoyoyoyoyoyoyo
                    yoyoyoyoyoyooyyoyo
                    yoyoyoyoyoyoyoyooy
                </div>
            </div>
            <div className={style.startButton}>
                <NavLink to={'/hyromancer/payment'} >
                <Button color={'primary'} variant={'contained'} style={{width: "200px", height: "50px", borderRadius: "10px"}} >Начать</Button>
                </NavLink>
            </div>
            <div className={style.mainContent}>
                <div className={style.warning}>
                    <div className={style.warnImage}>

                    </div>
                    <div className={style.warnMessage}>
                        yyoyoyoyoyoyoyoyyoyoyoyoyoyoyoyoyoyoyoyoyoyoy
                    </div>
                </div>
                <div className={style.warning}>
                    <div className={style.warnImage}>

                    </div>
                    <div className={style.warnMessage}>
                        yyoyoyoyoyoyoyoyyoyoyoyoyoyoyoyoyoyoyoyoyoyoy
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
};

export default Hyromancer