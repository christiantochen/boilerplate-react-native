import React, { Component } from 'react'
import { Text } from 'react-native'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'

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
