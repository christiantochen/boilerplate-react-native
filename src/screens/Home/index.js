import React, { Component } from 'react'
import { connect } from 'react-redux'

import View from './view'

class HomeContainer extends Component {
  render() {
    return <View {...this.props} />
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)