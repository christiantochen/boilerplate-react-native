import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view';
import { ContractorAction, SessionAction } from 'app/actions';

class PitSelectionContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            fetchContractors
        } = this.props

        fetchContractors();
    }

    render() {
        return <View {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        contractors: state.contractorReducer.contractors,
        session: state.sessionReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchContractors: () => dispatch(ContractorAction.getContractorsRequest({ include: "pit" })),
        selectPit: (selectedPit, selectedContractor) => dispatch(SessionAction.selectPit(selectedPit, selectedContractor))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PitSelectionContainer);
