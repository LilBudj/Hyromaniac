import React from "react";
import {connect} from "react-redux";
import Compatibility from "./Compatibility";
import {getForecast, setSecondZodiac} from "../../redux/compatibilityReducer";

class CompatibilityContainer extends React.Component{

    componentDidMount() {
        this.props.getForecast(this.props.zodiacFirst, this.props.zodiacSecond)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.zodiacFirst !== this.props.zodiacFirst || prevProps.zodiacSecond !== this.props.zodiacSecond){
            this.props.getForecast(this.props.zodiacFirst, this.props.zodiacSecond)
        }
    }

    render() {
        return <Compatibility {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    name: state.compatibilityReducer.unionName,
    body: state.compatibilityReducer.body,
    percent: state.compatibilityReducer.overallPercent,
    zodiacFirst: state.horoscopeReducer.zodiac,
    zodiacSecond: state.compatibilityReducer.matchZodiac,
    isLoading: state.compatibilityReducer.isLoading
});

export default connect(mapStateToProps, {
    getForecast,
    setSecondZodiac
})(CompatibilityContainer)
