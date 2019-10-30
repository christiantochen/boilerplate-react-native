import React, { Component } from 'react'
import { Avatar, Icon, Text } from 'react-native-elements'
import Styles from './styles'
import { withNavigation } from 'react-navigation'

class DrawerMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const canGoBack = this.props.navigation.dangerouslyGetParent().state.index > 0

    return (
      <Icon
        onPress={
          canGoBack ? () => this.props.navigation.goBack() : this.props.navigation.toggleDrawer
        }
        color="white"
        name={canGoBack ? 'arrow-back' : 'menu'}
        size={24}
        containerStyle={Styles.icon}
      />
    )
  }
}

export default withNavigation(DrawerMenu)
