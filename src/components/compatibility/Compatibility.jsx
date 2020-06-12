import React, {useState} from "react";
import style from "./Compatibility.module.css"
import aquarius from "../../assets/outline_stroke_aquarius.png";
import aries from "../../assets/outline_stroke_aries.png";
import cancer from "../../assets/outline_stroke_cancer.png";
import capricorn from "../../assets/outline_stroke_capricorn.png";
import gemini from "../../assets/outline_stroke_gemini.png";
import libra from "../../assets/outline_stroke_libra.png";
import lion from "../../assets/outline_stroke_lion.png";
import pisces from "../../assets/outline_stroke_pisces.png";
import saggitarius from "../../assets/outline_stroke_saggitarius.png";
import scorpio from "../../assets/outline_stroke_scorpio.png";
import taurus from "../../assets/outline_stroke_taurus.png";
import virgo from "../../assets/outline_stroke_virgo.png";
import preloader from "../../assets/Preloader.gif";
import Modal from "./Modal";

let zodiacSorter = (zodiac) => {
    switch (zodiac) {
        case 'Aquarius': {
            return aquarius;
        }
        case 'Aries': {
            return aries;
        }
        case 'Cancer': {
            return cancer;
        }
        case 'Capricorn': {
            return capricorn;
        }
        case 'Gemini': {
            return gemini;
        }
        case 'Libra': {
            return libra;
        }
        case 'Lion': {
            return lion;
        }
        case 'Pisces': {
            return pisces;
        }
        case 'Sagittarius': {
            return saggitarius;
        }
        case 'Scorpio': {
            return scorpio;
        }
        case 'Taurus': {
            return taurus;
        }
        case 'Virgo': {
            return virgo;
        }
        default: {
            console.log('error');
            return null
        }
    }
};

const Compatibility = (props) => {
    let zodiacFirst = zodiacSorter(props.zodiacFirst);
    let zodiacSecond = zodiacSorter(props.zodiacSecond);

  return(
      <>
      {props.isLoading ? <img style={{transform: 'scale(1.2, 1.2)'}} src={preloader} alt={'loader'}/>
              :
              <div className={style.container}>
                  {props.isModal && <Modal/>}
                  <div className={style.pageName}>Cовместимость</div>
                  <div className={style.images}>
                      <img src={zodiacFirst} className={style.image} alt={'zodiac'}/>
                      <div className={style.percent}>{props.percent} %</div>
                      <img src={zodiacSecond} className={style.image} alt={'zodiac'} onClick={props.setModal}/>
                  </div>
                  <div className={style.unionName}>{props.name}</div>
                  <div className={style.body}>{props.body}</div>
              </div>
      }
      </>
  )
};

export default Compatibility