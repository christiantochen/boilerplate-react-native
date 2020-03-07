import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './view'

class ExploreContainer extends Component {
  static navigationOptions = () => ({
    title: 'Explore',
  })

  render() {
    return <View {...this.props} />
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer)
