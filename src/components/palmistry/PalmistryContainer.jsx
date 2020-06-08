import React from "react";
import Palmistry from "./Palmistry";
import {fetchData} from "../../redux/palmReducer";
import {connect} from "react-redux";

class PalmistryContainer extends React.Component{

    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        return <Palmistry {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    bundle: state.palmReducer.dataBundles,
    isLoading: state.palmReducer.isLoading,
    data: state.palmReducer.stringData
});

export default connect(mapStateToProps, {
    fetchData: fetchData,
    }
)(PalmistryContainer)