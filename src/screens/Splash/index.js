import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SessionAction } from 'app/actions'
import View from './view'

class SplashContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <View {...this.props} />
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    initCheckAndNavigate: () => dispatch(SessionAction.initCheckAndNavigate()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashContainer)
