import React from "react";
import style from "./Palmistry.module.css"
import squareHand from '../../assets/img5.png';
import longHand from '../../assets/img6.png'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setPalmShape} from "../../redux/palmReducer";

const HandShape = (props) => {
  return(
          <div className={style.content}>
              <div style={{marginBottom: '5vh', marginTop: '5vh'}} className={style.session}>
                  Форма руки
              </div>
              <div className={style.handSection}>
                  <NavLink to={'/palmistry/shape/square'}><img className={style.handImg} src={squareHand} onClick={() => props.setPalmShape('square')} alt={'hand'}/></NavLink>
                  <NavLink to={'/palmistry/shape/long'}><img className={style.handImg} src={longHand} onClick={() => props.setPalmShape('long')} alt={'hand'}/></NavLink>
              </div>
                  <div className={"d-flex flex-column justify-content-between align-items-center h-50"}>
                      <div className={style.text}>
                          {Buffer.from(props.data.how_determine_form_arm, 'base64').toString()}
                      </div>
                      <div className={style.text}>
                          {Buffer.from(props.data.square_hand_form, 'base64').toString()}
                      </div>
                  </div>
          </div>
  )
};

export default connect(null, {
    setPalmShape
})(HandShape)