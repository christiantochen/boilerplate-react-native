import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: (username, password) => dispatch(loginActions.requestLogin(username, password)),
        onFingerprint: () => { console.log("fingerprint clicked") }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
