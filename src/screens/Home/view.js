import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Text } from 'react-native'

import { Wrapper } from './styles'

class HomeView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Text>Home</Text>
      </Wrapper>
    )
  }
}

HomeView.propTypes = {}

export default HomeView
