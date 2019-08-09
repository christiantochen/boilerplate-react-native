import React, { Component } from 'react';
import SplashView from './SplashView';
import { connect } from 'react-redux';
import * as splashActions from 'app/actions/splashActions';

class SplashContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SplashView {...this.props} />;
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
