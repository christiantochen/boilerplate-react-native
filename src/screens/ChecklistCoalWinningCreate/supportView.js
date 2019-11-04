import React, { Component } from 'react'
import { Text, Card, CardItem, Label, Input } from 'native-base'
import { View } from 'react-native'
import styles from './styles'

class SupportView extends Component {
  constructor(props) {
    super(props)

    const { dozerCount, dozerRemark, dumpTruckActual, dumpTruckPlan, cleaningUnitActual, cleaningUnitPlan } = props

    this.state = {
      dozerCount,
      dozerRemark,
      dumpTruckActual,
      dumpTruckPlan,
      cleaningUnitActual,
      cleaningUnitPlan,
    }
  }

  cardHeader(title) {
    return (
      <CardItem key="header" style={{ ...styles.borderTopRadius, padding: 16, backgroundColor: '#D8D8D8' }}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </CardItem>
    )
  }

  cardItem(title, actual, plan, last, onChangeText) {
    const lastStyle = last ? styles.borderBottomRadius : styles.borderBottomDivider

    return (
      <CardItem key={title} style={{ ...lastStyle, padding: 16, height: 44 }}>
        <Label style={styles.labelInCard}>{title}</Label>
        <Input
          style={{
            ...styles.input,
            color: actual >= plan ? '#00BD88' : '#FF7301',
          }}
          value={actual.toString()}
          onChangeText={onChangeText}
        />
        <Text style={{ fontSize: 14, display: plan !== undefined ? 'flex' : 'none' }}>/</Text>
        <Text style={{ fontSize: 14, display: plan !== undefined ? 'flex' : 'none' }}>{plan}</Text>
      </CardItem>
    )
  }

  render() {
    return (
      <View key="supportView" style={{ flex: 1, padding: 16, display: this.props.show ? 'flex' : 'none' }}>
        <Card style={{ ...styles.borderRadius }}>
          {this.cardHeader('Support Equipment')}
          {this.cardItem('Dump Truck', this.state.dumpTruckActual, this.state.dumpTruckPlan, undefined, (text) =>
            this.setState({ dumpTruckActual: Number(text) })
          )}
          {this.cardItem('Dozer', this.state.dozerCount, undefined, true, (text) =>
            this.setState({ dozerCount: Number(text) })
          )}
        </Card>
        <Card style={{ marginTop: 16, ...styles.borderRadius }}>
          {this.cardHeader('Cleaning')}
          {this.cardItem('Dump Truck', this.state.cleaningUnitActual, this.state.cleaningUnitPlan, true, (text) =>
            this.setState({ cleaningUnitActual: Number(text) })
          )}
        </Card>
      </View>
    )
  }
}

export default SupportView
