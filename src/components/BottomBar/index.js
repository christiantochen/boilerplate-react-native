import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Avatar, Icon, Text } from 'native-base'
import { View, TouchableOpacity, Image } from 'react-native'
import { withNavigation } from 'react-navigation'

class BottomBar extends Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  render() {
    return <View>
        <Text>Test</Text>
    </View>
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(BottomBar))
