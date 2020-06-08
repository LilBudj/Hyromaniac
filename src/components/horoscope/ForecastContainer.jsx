import React from "react";
import {connect} from "react-redux";
import Today from "./Today";
import {fetchHoroscope, setZodiacAC} from "../../redux/horoscopeReducer";

class ForecastContainer extends React.Component{

    render() {
        return <Today {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
    forecasts: state.horoscopeReducer.dailyForecasts
}};

export default connect(mapStateToProps, {
    fetchHoroscope,
    setZodiac: setZodiacAC
})(ForecastContainer)