import React, { Component } from 'react'
import { Icon } from 'native-base'
import styles from './styles'
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
        name={canGoBack ? 'arrow-back' : 'menu'}
        style={styles.icon}
      />
    )
  }
}

export default withNavigation(DrawerMenu)
