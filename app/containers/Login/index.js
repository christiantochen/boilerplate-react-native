import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LoginActions from '../../models/sessions/action';
import View from './view';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        username: state.sessionReducer.username,
        password: state.sessionReducer.password
    };
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
