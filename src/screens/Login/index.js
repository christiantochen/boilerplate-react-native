import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './view'
import { AUTH_ACTION_LOGIN } from '../../redux/actions'

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
