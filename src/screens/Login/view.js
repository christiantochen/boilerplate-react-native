import React, { Component } from 'react'
import { Form, Input, Icon, Text, Button, Label, Item } from 'native-base'
import { View, Image } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

class LoginView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: props.session.username,
      password: props.session.password,
      usernameErrorText: undefined,
      passwordErrorText: undefined,
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleFingerPrint = this.handleFingerPrint.bind(this)
  }

  handleLogin() {
    const { username, password } = this.state

    this.props.onLogin(username, password)
  }

  handleFingerPrint() {
    this.props.onFingerprint()
  }

  renderUsernameInput() {
    return (
      <Input
        returnKeyType={'next'}
        blurOnSubmit={false}
        autoCapitalize="none"
        placeholderTextColor="#CECECE"
        value={this.state.username}
        onChangeText={(value) => this.setState({ username: value })}
      />
    )
  }

  renderPasswordInput() {
    return (
      <Input
        secureTextEntry={true}
        autoCapitalize="none"
        value={this.state.password}
        onChangeText={(value) => this.setState({ password: value })}
      />
    )
  }

  renderSubmitButton() {
    return (
      <Button full style={styles.submitButton} onPress={this.handleLogin}>
        <Text style={styles.submitButtonText}>Login</Text>
      </Button>
    )
  }

  renderFingerprintButton() {
    return (
      <Button full style={styles.fingerprintButton} onPress={this.handleFingerPrint}>
        <Icon
          type="MaterialCommunityIcons"
          name="fingerprint"
          size={24}
          style={styles.fingerprintButtonIcon}
        />
        <Text style={styles.fingerprintButtonText}>Click to login using fingerprint</Text>
      </Button>
    )
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        {/* TODO: COMBINE WITH SPLASH SCREEN STYLES */}
        <Image style={styles.headerLogo} source={require('assets/ic_logo.png')}></Image>
        <Text style={styles.headerTitle}>SUPERVISOR APP</Text>
      </View>
    )
  }

  renderContent() {
    return (
      <Form style={styles.content}>
        <Item stackedLabel>
          <Label>Username</Label>
          {this.renderUsernameInput()}
        </Item>
        <Item stackedLabel>
          <Label>Password</Label>
          {this.renderPasswordInput()}
        </Item>
        {this.renderSubmitButton()}
        <View style={{ flex: 1, minHeight: 16 }} />
        {this.renderFingerprintButton()}
      </Form>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    )
  }
}

LoginView.propTypes = {
  onLogin: PropTypes.func,
  onFingerprint: PropTypes.func,
}

export default LoginView
