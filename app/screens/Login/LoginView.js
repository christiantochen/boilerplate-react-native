import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import { Input } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import PropTypes from 'prop-types';

class LoginView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleFingerPrint = this.handleFingerPrint.bind(this);
    }

    handleLogin() {
        const {
            username,
            password
        } = this.state;

        this.props.onLogin(username, password);
    }

    handleFingerPrint() {
        this.props.onFingerprint();
    }

    renderUsernameInput() {
        return (
            <View style={styles.textInputContainer}>
                <Image style={styles.textInputIcon} source={require('app/assets/ic_password.png')} />
                <Input style={styles.textInput} placeholder="Username"
                    returnKeyType={"next"} blurOnSubmit={false}
                    placeholderTextColor="#CECECE" autoCapitalize="none"
                    onChangeText={value => this.setState({ username: value })} />
            </View>
        )
    }

    renderPasswordInput() {
        return (
            <View style={styles.textInputContainer}>
                <Image style={styles.textInputIcon} source={require('app/assets/ic_password.png')} />
                <Input style={styles.textInput} placeholder="Password" secureTextEntry={true}
                    placeholderTextColor="#CECECE" autoCapitalize="none"
                    onChangeText={value => this.setState({ password: value })} />
            </View>
        )
    }

    renderSubmitButton() {
        return (
            <TouchableHighlight style={styles.buttonOnPressed} underlayColor="#FFFFFF"
                onPress={this.handleLogin}>
                <LinearGradient
                    style={styles.submitButton}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 4, y: 0 }}
                    colors={['#463291', '#c800ff']}>
                    <Text style={styles.submitButtonText}>Log in</Text>
                </LinearGradient>
            </TouchableHighlight>
        )
    }

    renderFingerprintButton() {
        return (
            <TouchableHighlight style={styles.buttonOnPressed} underlayColor="#FFFFFF"
                onPress={this.handleFingerPrint}>
                <View style={styles.fingerprintButton}>
                    <Image style={styles.fingerprintButtonIcon} source={require('app/assets/ic_fingerprint.png')} />
                    <Text style={styles.fingerprintButtonText}>Click to login using fingerprint</Text>
                </View>
            </TouchableHighlight>
        )
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                {/* TODO: COMBINE WITH SPLASH SCREEN STYLES */}
                <Image style={styles.headerLogo} source={require('app/assets/ic_logo.png')}></Image>
                <Text style={styles.headerTitle}>SUPERVISOR APP</Text>
            </View>
        )
    }

    renderContent() {
        return (
            <View style={styles.content}>
                <View style={{ height: 14 }} />
                {this.renderUsernameInput()}
                <View style={{ height: 16 }} />
                {this.renderPasswordInput()}
                <View style={{ height: 16 }} />
                {this.renderSubmitButton()}
                <View style={{ flex: 1, minHeight: 16 }} />
                {this.renderFingerprintButton()}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderContent()}
            </View>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func,
    onFingerprint: PropTypes.func
};

export default LoginView;
