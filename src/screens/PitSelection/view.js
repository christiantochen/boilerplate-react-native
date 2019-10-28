import lo from 'lodash'
import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import styles from './styles'
import { BUTTON_COLOR_GRADIENT } from 'app/fixtures/styles'

class PitSelectionView extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.contractors &&
      nextProps.contractors.length &&
      !prevState.selectedContractor &&
      !prevState.selectedPit
    ) {
      const selectedContractor = lo.head(nextProps.contractors)
      const selectedPit = lo.head(selectedContractor.pits)
      return { selectedPit, selectedContractor }
    }

    return {}
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedPit: this.props.session.selectedPit,
      selectedContractor: this.props.session.selectedContractor,
    }

    this.handleSelectedPit = this.handleSelectedPit.bind(this)
    this.handleContinueButton = this.handleContinueButton.bind(this)
  }

  handleSelectedPit(pit, contractor) {
    this.setState({ selectedPit: pit, selectedContractor: contractor })
  }

  handleContinueButton() {
    const { selectedPit, selectedContractor } = this.state

    this.props.selectPit(selectedPit, selectedContractor)
  }

  renderChecker(value) {
    if (value) {
      return <Image style={styles.pitIcon} source={require(`assets/ic_check_true.png`)} />
    } else {
      return <Image style={styles.pitIcon} source={require('assets/ic_check_false.png')} />
    }
  }

  renderPit(pit, contractor) {
    return (
      <TouchableHighlight
        key={pit.id}
        underlayColor="#FFFFFF"
        onPress={() => this.handleSelectedPit(pit, contractor)}
      >
        <View style={styles.pitContainer}>
          <Text style={styles.pitTitle}>{pit.name}</Text>
          {this.renderChecker(
            this.state.selectedPit ? this.state.selectedPit.id === pit.id : false
          )}
        </View>
      </TouchableHighlight>
    )
  }

  renderContractor(contractor) {
    return (
      <View key={contractor.id} style={{ ...styles.contractorContainer, marginBottom: 16 }}>
        <Text style={styles.contractorTitle}>{contractor.name}</Text>
        {contractor.pits.map((pit) => this.renderPit(pit, contractor))}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ paddingLeft: 24, paddingRight: 24 }}>
          <View style={{ height: 24 }} />
          <Text style={styles.title}>Hi, {this.props.session.displayName}</Text>
          <View style={{ height: 10 }} />
          <Text style={styles.subTitle}>Select a pit to continue</Text>
          <View style={{ height: 18 }} />
          {this.props.contractors.map((contractor) => this.renderContractor(contractor))}
          <View style={{ height: 8 }} />
        </ScrollView>
        <TouchableHighlight underlayColor="#FFFFFF" onPress={this.handleContinueButton}>
          <LinearGradient
            style={{ padding: 12 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 4, y: 0 }}
            colors={BUTTON_COLOR_GRADIENT}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    )
  }
}

PitSelectionView.propTypes = {
  loginInfo: PropTypes.object,
  contractors: PropTypes.array,
}

export default PitSelectionView
