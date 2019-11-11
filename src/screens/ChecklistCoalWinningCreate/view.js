import React, { Component } from 'react'
import { Text, Toast, Button, Icon } from 'native-base'
import { View } from 'react-native'
import { ACCENT_COLOR } from '../../fixtures/styles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import EquipmentView from './equipmentView'
import SupportView from './supportView'
import LocationView from './locationView'
import ChecklistStep from '../../components/ChecklistStep'
import styles from './styles'

class ChecklistCoalWinningCreateView extends Component {
  constructor(props) {
    super(props)

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
        dumpTruckPlan: 0,
        cleaningUnitActual: 0,
        cleaningUnitPlan: 0,
        locations: [],
        photosBase64: [],
      },
    }
  }

  footerButton(title, showOnSteps, onPress, additionalStyle = {}) {
    const display = showOnSteps.includes(this.state.step) ? 'flex' : 'none'

    return (
      <Button style={{ flex: 1, borderRadius: 0, backgroundColor: 'white', display }} onPress={onPress}>
        <Text style={{ flex: 1, ...additionalStyle, color: ACCENT_COLOR }}>{title}</Text>
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
        <ChecklistStep
          steps={['Equipment', 'Support', 'Location']}
          stepColor="#D8D8D8"
          value={this.state.step}
          onPress={(step) => this.setState({ step })}
        />
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
        <View style={{ flexDirection: 'row', backgroundColor: 'white', elevation: 4 }}>
          {this.footerButton('Previous', [2, 3], this.onPrevious.bind(this))}
          {this.footerButton('Next', [1, 2], this.onNext.bind(this), { textAlign: 'right' })}
          {this.footerButton('Complete', [3], this.onComplete.bind(this), { textAlign: 'right' })}
        </View>
      </View>
    )
  }
}

export default ChecklistCoalWinningCreateView
