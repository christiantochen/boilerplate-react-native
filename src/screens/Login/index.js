import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginAction, SessionAction } from 'app/actions'
import View from './view'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <View {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    session: state.sessionReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (username, password) => dispatch(LoginAction.loginRequest(username, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
