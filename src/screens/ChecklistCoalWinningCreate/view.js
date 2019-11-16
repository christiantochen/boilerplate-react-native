import React, { Component } from 'react'
import { Text, Button } from 'native-base'
import { View } from 'react-native'
import { ACCENT_COLOR } from '../../fixtures/styles'
import EquipmentView from './equipmentView'
import SupportView from './supportView'
import LocationView from './locationView'
import ChecklistStep from '../../components/ChecklistStep'
import NavigationService from '../../navigation/NavigationService'
import UUIDGenerator from 'react-native-uuid-generator'

class ChecklistCoalWinningCreateView extends Component {
  constructor(props) {
    super(props)

    const { checklist } = props.navigation.state.params
    const { excavators } = props

    const defaultExcavator = excavators && excavators.length ? excavators[0].id : undefined

    const coalWinning = checklist || {
      pitId: props.selectedPit.id,
      excavatorId: defaultExcavator,
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
    }

    this.state = {
      step: 1,
      coalWinning,
    }

    this.onComplete = this.onComplete.bind(this)
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
    const step = this.state.step === 2 ? 1 : 2
    this.setState({ step })
  }

  onNext() {
    const step = this.state.step === 1 ? 2 : 3
    this.setState({ step })
  }

  async onComplete() {
    const { coalWinning } = this.state
    coalWinning.id = await UUIDGenerator.getRandomUUID()
    coalWinning.title = this.props.excavators.filter((excavator) => excavator.id === coalWinning.excavatorId)[0].name
    this.props.saveToDraft(coalWinning)
    NavigationService.goBack()
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
        {this.state.step === 1 && (
          <EquipmentView
            excavators={this.props.excavators}
            selectedPit={this.props.selectedPit}
            coalWinning={this.state.coalWinning}
          />
        )}
        {this.state.step === 2 && (
          <SupportView operationalPlan={this.props.operationalPlan} coalWinning={this.state.coalWinning} />
        )}
        {this.state.step === 3 && (
          <LocationView operationalPlan={this.props.operationalPlan} locations={this.state.coalWinning.locations} />
        )}
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
