import { Button, Form, Icon, Item } from 'native-base'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Input, Label, Text } from '../../components'
import { Wrapper } from './styles'

class LoginView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: props.auth.username,
      password: undefined,
    }
  }

  onChange(field, value) {
    this.setState({ [field]: value })
  }

  onLogin() {
    const { username, password } = this.state
    this.props.login(username, password)
  }

  render() {
    return (
      <Wrapper>
        <Form style={{ flex: 1 }}>
          <Item inlineLabel success last>
            <Label>Username</Label>
            <Input
              autoCapitalize="none"
              value={this.state.username}
              onChangeText={this.onChange.bind(this, 'username')}
            />
            <Icon name="checkmark-circle" />
          </Item>
          <Item inlineLabel error last>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              value={this.state.password}
              onChangeText={this.onChange.bind(this, 'password')}
            />
            <Icon name="close-circle" />
          </Item>
        </Form>
        <Button full onPress={this.onLogin.bind(this)}>
          <Text>Login</Text>
        </Button>
      </Wrapper>
    )
  }
}

LoginView.propTypes = {
  auth: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  login: PropTypes.func.isRequired,
}

export default LoginView
