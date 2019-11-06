import React, { Component } from 'react'
import { Text, Toast, Button } from 'native-base'
import { View } from 'react-native'
import { ACCENT_COLOR } from '../../fixtures/styles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import EquipmentView from './equipmentView'
import SupportView from './supportView'
import LocationView from './locationView'
import styles from './styles'

class ChecklistCoalWinningCreateView extends Component {
  constructor(props) {
    super(props)

    const coalWinningPlan = props.operationalPlan.plans['coalWinning'] || { dumpTruck: 0 }
    const cleaningUnitPlan = props.operationalPlan.plans['cleaningUnit'] || 0

    this.state = {
      step: 1,
      coalWinning: {
        pitId: props.selectedPit.id,
        excavatorId: undefined,
        isGood: false,
        noActivity: false,
        remarks: undefined,
        contractorPICName: undefined,
        signatureBase64: undefined,
        dozerCount: 0,
        dozerRemark: undefined,
        dumpTruckActual: 0,
        dumpTruckPlan: coalWinningPlan.dumpTruck,
        cleaningUnitActual: 0,
        cleaningUnitPlan,
        locations: [
          {
            id: 1,
            seam: props.operationalPlan.seams[0],
            sectionPrefix: props.operationalPlan.sectionPrefix,
            sectionFrom: props.operationalPlan.sectionFrom,
            sectionTo: props.operationalPlan.sectionTo,
            elevation: 0,
            others: [],
            timesheets: [],
          },
        ],
        photosBase64: [],
      },
    }
  }

  headerIconActiveWhen(step) {
    return { backgroundColor: this.state.step === step ? ACCENT_COLOR : '#D8D8D8' }
  }

  headerIcon(title, step, additionalStyle = {}) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ ...styles.headerLabel, top: 44, ...additionalStyle }}>{title}</Text>
        <TouchableHighlight style={styles.headerIconContainer} onPress={() => this.setState({ step })}>
          <View style={{ ...styles.headerIcon, ...this.headerIconActiveWhen(step) }} />
        </TouchableHighlight>
      </View>
    )
  }

  footerButton(title, showOnSteps, onPress, additionalStyle = {}) {
    const display = showOnSteps.includes(this.state.step) ? 'flex' : 'none'

    return (
      <Button style={{ flex: 1, borderRadius: 0, backgroundColor: ACCENT_COLOR, display }} onPress={onPress}>
        <Text style={{ flex: 1, ...additionalStyle }}>{title}</Text>
      </Button>
    )
  }

  onPrevious() {
    this.setState({ step: this.state.step === 2 ? 1 : 2 })
  }

  onNext() {
    this.setState({ step: this.state.step === 1 ? 2 : 3 })
  }

  onComplete() {
    Toast.show({ text: 'In Development' })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F0F5FF' }}>
        <View style={styles.header}>
          <View style={styles.headerLine} />
          {this.headerIcon('Equipment', 1, { left: 22 })}
          {this.headerIcon('Support', 2)}
          {this.headerIcon('Location', 3, { right: 27 })}
        </View>
        <EquipmentView
          show={this.state.step === 1}
          excavators={this.props.excavators}
          selectedPit={this.props.selectedPit}
          {...this.state.coalWinning}
        />
        <SupportView
          show={this.state.step === 2}
          operationalPlan={this.props.operationalPlan}
          {...this.state.coalWinning}
        />
        <LocationView
          show={this.state.step === 3}
          operationalPlan={this.props.operationalPlan}
          locations={this.state.coalWinning.locations}
        />
        <View style={{ flexDirection: 'row' }}>
          {this.footerButton('Previous', [2, 3], this.onPrevious.bind(this))}
          {this.footerButton('Next', [1, 2], this.onNext.bind(this), { textAlign: 'right' })}
          {this.footerButton('Complete', [3], this.onComplete.bind(this), { textAlign: 'right' })}
        </View>
      </View>
    )
  }
}

export default ChecklistCoalWinningCreateView
