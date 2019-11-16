import React, { Component } from 'react'
import { Text, Card, CardItem, Label, Input } from 'native-base'
import { View } from 'react-native'
import styles from './styles'

class SupportView extends Component {
  constructor(props) {
    super(props)

    const { coalWinning } = props

    this.state = {
      coalWinning,
    }

    this.handleDozerCount = this.handleDozerCount.bind(this)
    this.handleCleaningUnitActual = this.handleCleaningUnitActual.bind(this)
    this.handleDumpTruckActual = this.handleDumpTruckActual.bind(this)
  }

  handleDozerCount(text) {
    const { coalWinning } = this.state
    coalWinning.dozerCount = Number(text)
    this.setState({ coalWinning })
  }

  handleCleaningUnitActual(text) {
    const { coalWinning } = this.state
    coalWinning.cleaningUnitActual = Number(text)
    this.setState({ coalWinning })
  }

  handleDumpTruckActual(text) {
    const { coalWinning } = this.state
    coalWinning.dumpTruckActual = Number(text)
    this.setState({ coalWinning })
  }

  cardHeader(title) {
    return (
      <CardItem
        key={`supportView_cardHeader_${title}`}
        style={{ ...styles.borderTopRadius, padding: 16, backgroundColor: '#D8D8D8' }}
      >
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </CardItem>
    )
  }

  cardItem(title, actual, plan, last, onChangeText) {
    const lastStyle = last ? styles.borderBottomRadius : styles.borderBottomDivider
    return (
      <CardItem key={`supportView_cardItem_${title}`} style={{ ...lastStyle, padding: 16, height: 44 }}>
        <Label style={styles.labelInCard}>{title}</Label>
        <Input
          style={{
            ...styles.input,
            color: actual >= plan ? '#00BD88' : '#FF7301',
          }}
          keyboardType="number-pad"
          value={actual.toString()}
          onChangeText={onChangeText}
        />
        {plan !== undefined && <Text style={{ fontSize: 14 }}>/</Text>}
        {plan !== undefined && <Text style={{ fontSize: 14 }}>{plan}</Text>}
      </CardItem>
    )
  }

  render() {
    const { dumpTruckPlan, dumpTruckActual, cleaningUnitActual, cleaningUnitPlan, dozerCount } = this.state.coalWinning

    return (
      <View key="supportView" style={{ flex: 1, padding: 16 }}>
        <Card style={{ ...styles.borderRadius }}>
          {this.cardHeader('Support Equipment')}
          {this.cardItem('Dump Truck', dumpTruckActual, dumpTruckPlan, undefined, this.handleDumpTruckActual)}
          {this.cardItem('Dozer', dozerCount, undefined, true, this.handleDozerCount)}
        </Card>
        <Card style={{ marginTop: 16, ...styles.borderRadius }}>
          {this.cardHeader('Cleaning')}
          {this.cardItem('Cleaning Unit', cleaningUnitActual, cleaningUnitPlan, true, this.handleCleaningUnitActual)}
        </Card>
      </View>
    )
  }
}

export default SupportView
