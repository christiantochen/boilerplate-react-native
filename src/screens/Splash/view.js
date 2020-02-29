import React, { Component } from 'react'
import { Text } from 'react-native'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'

class SplashView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Text>DEVELOPMENT</Text>
      </Wrapper>
    )
  }
}

SplashView.propTypes = {}

export default SplashView
