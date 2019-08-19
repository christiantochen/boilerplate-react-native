import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as splashActions from './actions';
import View from './view';

class SplashContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onSplashScreenReady: () => dispatch(splashActions.onSplashScreenReady())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashContainer);
