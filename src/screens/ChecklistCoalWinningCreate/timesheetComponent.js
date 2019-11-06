import React, { Component } from 'react'
import { View, Modal, TouchableOpacity } from 'react-native'
import {
  Card,
  CardItem,
  Text,
  Picker,
  Label,
  Button,
  Icon,
  Toast,
  Input,
  Item,
  DatePicker,
  Textarea,
} from 'native-base'
import styles from './styles'

class TimesheetComponent extends Component {
  constructor(props) {
    super(props)

    const { id, timeFrom, timeTo, remarks } = props.timesheet

    this.state = { id, timeFrom, timeTo, remarks }
  }

  render() {
    return (
      <View key={this.state.id} style={{ flexDirection: 'row', alignItems: 'flex-start', ...this.props.style }}>
        <Text style={{ ...styles.labelInCard, color: 'black' }}>{`${this.state.timeFrom} - ${this.state.timeTo}`}</Text>
        <Textarea bordered style={{ ...styles.textArea, ...styles.borderRadius, flex: 1 }} value={this.state.remarks} />
        <Icon
          name="remove-circle"
          style={{ ...styles.icon, color: 'red', marginLeft: 16, textAlign: 'center' }}
          onPress={() => this.props.onRemove(this.state.id)}
        />
      </View>
    )
  }
}

export default TimesheetComponent
