import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

class SplashView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
       setTimeout(() => this.props.initCheckAndNavigate(), 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('assets/ic_logo.png')}></Image>
        <Text style={styles.title}>SUPERVISOR APP</Text>
      </View>
    )
  }
}

SplashView.propTypes = {
  initCheckAndNavigate: PropTypes.func,
}

export default SplashView
