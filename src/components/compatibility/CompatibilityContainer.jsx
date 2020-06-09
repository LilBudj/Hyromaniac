import React from "react";
import {connect} from "react-redux";
import Compatibility from "./Compatibility";
import {getForecast} from "../../redux/compatibilityReducer";

class CompatibilityContainer extends React.Component{

    componentDidMount() {

    }

    render() {
        return <Compatibility {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    zodiacFirst: state.horoscopeReducer.zodiac,
    zodiacSecond: state.compatibilityReducer.matchZodiac
});

export default connect(mapStateToProps, {
    getForecast,

})(CompatibilityContainer)
