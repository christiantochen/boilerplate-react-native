import React, { Component } from 'react'
import { Text, ScrollView, View, Image } from 'react-native'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'

class ExploreView extends Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 16 }}>
      </ScrollView>
    )
  }
}

ExploreView.propTypes = {}

export default ExploreView
