import React, {useState} from "react";
import style from "./Palmistry.module.css"
import {NavLink} from "react-router-dom";
import squareHand from "../../assets/img7.png";
import longHand from "../../assets/img8.png";
import Slider from "../utils/slider/Slider";
import {connect} from "react-redux";
import {setFingerLength, setPalmLength} from "../../redux/chiroReducer";

const HandLength = (props) => {
    debugger
    let [fingerSlider, toggleFingerSlider] = useState(false);
    let [palmSlider, togglePalmSlider] = useState(false);

    return(
        <div>
            <div style={{height: '100vh'}} className={style.content}>

                <div style={{marginTop: '5vh'}} className={style.session}>
                    Длина руки
                </div>
                {fingerSlider && <Slider min={'30'} max={'120'} range={'5'} value={props.fingerLength} onChange={(e) => props.setFingerLength(e.currentTarget.value)}/>}
                {palmSlider && <Slider min={'30'} max={'120'} range={'5'} value={props.palmLength} onChange={(e) => props.setPalmLength(e.currentTarget.value)}/>}
                <div className={"d-flex justify-content-around align-items-center h-50 w-80"}>
                    <img onClick={() => togglePalmSlider(!palmSlider)}
                        className={style.handImg} src={squareHand} alt={'hand'}/>
                    <img onClick={() => toggleFingerSlider(!fingerSlider)}
                        className={style.handImg} src={longHand} alt={'hand'}/>
                </div>
                <div className={"d-flex flex-column justify-content-between align-items-center h-50"}>
                    <div className={style.text}>
                        {Buffer.from(props.data.how_long_fingers_first, 'base64').toString()}
                    </div>
                    <div className={style.text}>
                        {Buffer.from(props.data.how_long_determine_second, 'base64').toString()}
                    </div>
                </div>
                <NavLink className={style.link} to={'/palmistry/length/average'}><button className={style.button}>Продолжить</button></NavLink>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    fingerLength: state.palmMeasures.fingerLength,
    palmLength: state.palmMeasures.palmLength
});

export default connect(mapStateToProps, {
    setFingerLength,
    setPalmLength
})(HandLength)