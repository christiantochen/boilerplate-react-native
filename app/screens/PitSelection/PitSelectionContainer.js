import React, { Component } from 'react';
import { connect } from 'react-redux';
import PitSelectionView from './PitSelectionView';
import * as contractorActions from 'app/actions/contractorActions';

class PitSelectionContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            requestContractors
        } = this.props

        requestContractors();
    }

    render() {
        return <PitSelectionView {...this.props} />;
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
        requestContractors: () => dispatch(contractorActions.requestContractors({ include: "pit" }))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PitSelectionContainer);
