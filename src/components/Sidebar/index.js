import React, { Component } from 'react'
import { Avatar, Icon, Text } from 'react-native-elements'
import { View, TouchableOpacity, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import Styles from './styles'
import { TEXT_COLOR_ACCENT, TEXT_COLOR_WHITE } from '../../fixtures/styles'

class Sidebar extends Component {
  constructor(props) {
    super(props)

    const { params } = this.props.navigation.state
    const { session } = params

    this.state = {
      ...session,
    }

    this.handleLogoutButton = this.handleLogoutButton.bind(this)
  }

  handleLogoutButton() {
    this.props.navigation.navigate({ routeName: 'Login', params: { fromLogout: true } })
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Image style={Styles.headerLogo} source={require('assets/ic_logo.png')}></Image>
          <Text style={Styles.headerTitle}>SUPERVISOR APP</Text>
        </View>
        <View style={Styles.profileContent}>
          <Avatar
            containerStyle={Styles.profilePicture}
            rounded
            size="large"
            source={this.state.displayPictureUrl}
            title={(this.state.displayName || 'S')[0]}
          ></Avatar>
          <Text style={Styles.profileName}>{this.state.displayName}</Text>
          <Text style={Styles.profileSub}>Supervisor</Text>
        </View>
        <TouchableOpacity>
          <View style={Styles.selectedPitRow}>
            <View style={Styles.selectedPitContent}>
              <Text style={Styles.pitName}>{this.state.selectedPit.name}</Text>
              <Text style={Styles.contractorName}>{this.state.selectedContractor.name}</Text>
            </View>
            <Icon color={TEXT_COLOR_ACCENT} name="edit"></Icon>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={this.handleLogoutButton}>
          <View style={Styles.logoutButton}>
            <Text style={Styles.logoutText}>Logout</Text>
            <Icon color={TEXT_COLOR_WHITE} name="exit-to-app"></Icon>
          </View>
        </TouchableOpacity>
        <Text style={Styles.version}>v1.0.4</Text>
      </View>
    )
  }
}

export default withNavigation(Sidebar)
