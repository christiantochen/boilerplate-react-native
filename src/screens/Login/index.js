import React, { Component } from 'react'
import { connect } from 'react-redux'

import { AUTH_ACTION_LOGIN } from '../../redux/actions'
import View from './view'

class LoginContainer extends Component {
  render() {
    return <View {...this.props} />
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch({ type: AUTH_ACTION_LOGIN, username, password }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
