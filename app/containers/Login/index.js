import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LoginActions from './actions';
import View from './view';

class LoginContainer extends Component {
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
        onLogin: (username, password) => dispatch(LoginActions.requestLogin(username, password)),
        onFingerprint: () => { console.log("fingerprint clicked") }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
