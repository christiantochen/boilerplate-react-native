import React, { Component } from 'react'
import { Text } from 'react-native'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'
import { Input } from '../../components'

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

  render() {
    return (
      <Wrapper>
        <Input
          placeholder={'Username'}
          autoCapitalize="none"
          value={this.state.username}
          onChangeText={this.onChange.bind(this, 'username')}
        />
        <Input
          placeholder={'Password'}
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={this.onChange.bind(this, 'password')}
        />
      </Wrapper>
    )
  }
}

LoginView.propTypes = {
  auth: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
}

export default LoginView
