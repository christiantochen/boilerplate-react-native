import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view';
// import * as actions from 'app/store/contrators/action';

class PitSelectionContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const {
        //     requestContractors
        // } = this.props

        // requestContractors();
    }

    render() {
        return <View {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        contractors: state.contractorReducer.contractors,
        loginInfo: state.loginReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // requestContractors: () => dispatch(actions.requestContractors({ include: "pit" }))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PitSelectionContainer);
