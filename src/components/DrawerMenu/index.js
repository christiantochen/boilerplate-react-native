import React, { Component } from 'react'
import { Avatar, Icon, Text } from 'react-native-elements'
import Styles from './styles'
import { withNavigation } from 'react-navigation'

class DrawerMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Icon
        onPress={this.props.navigation.toggleDrawer}
        color="white" name="menu"
        size={24}
        containerStyle={Styles.icon}
      />
    )
  }
}

export default withNavigation(DrawerMenu)
