import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Avatar, Icon, Text } from 'native-base'
import { View, TouchableOpacity, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import styles from './styles'
import { TEXT_COLOR_ACCENT, TEXT_COLOR_WHITE } from '../../fixtures/styles'
import { SessionAction } from '../../actions'
import NavigationService from '../../navigation/NavigationService'

class SideBar extends Component {
  constructor(props) {
    super(props)

    const { displayName, displayPictureUrl, selectedPit, selectedContractor } = props.session

    this.state = {
      displayName,
      displayPictureUrl,
      selectedPit,
      selectedContractor,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.headerLogo} source={require('assets/ic_logo.png')} />
          <Text style={styles.headerTitle}>SUPERVISOR APP</Text>
        </View>
        <View style={styles.profileContent}>
          <Image style={styles.profilePicture} source={{ uri: this.state.displayPictureUrl }} />
          <Text style={styles.profileName}>{this.state.displayName}</Text>
          <Text style={styles.profileSub}>Supervisor</Text>
        </View>
        <TouchableOpacity onPress={() => NavigationService.navigate('PitSelection')}>
          <View style={styles.selectedPitRow}>
            <View style={styles.selectedPitContent}>
              <Text style={styles.pitName}>{this.state.selectedPit.name}</Text>
              <Text style={styles.contractorName}>{this.state.selectedContractor.name}</Text>
            </View>
            <Icon color={TEXT_COLOR_ACCENT} type="MaterialIcons" name="edit" />
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={this.props.sessionClear}>
          <View style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
            <Icon style={{ color: TEXT_COLOR_WHITE }} type="MaterialIcons" name="exit-to-app" />
          </View>
        </TouchableOpacity>
        <Text style={styles.version}>v1.0.4</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    session: state.sessionReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sessionClear: () => dispatch(SessionAction.sessionClearRequest()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(SideBar))
