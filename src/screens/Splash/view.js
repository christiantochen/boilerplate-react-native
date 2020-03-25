import React, { Component } from 'react'
import { Text } from 'react-native'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'

class SplashView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Login')
    }, 2000)
  }

  render() {
    return <Wrapper></Wrapper>
  }
}

SplashView.propTypes = {}

export default SplashView
