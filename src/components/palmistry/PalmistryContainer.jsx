import React from "react";
import Palmistry from "./Palmistry";
import {fetchData} from "../../redux/chiroReducer";
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
    bundle: state.dataBundles,
    isLoading: state.isLoading,
    data: state.stringData
});

export default connect(mapStateToProps, {
    fetchData: fetchData,
    }
)(PalmistryContainer)