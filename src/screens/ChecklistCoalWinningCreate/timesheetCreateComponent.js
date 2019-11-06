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
import RNDateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { ACCENT_COLOR } from '../../fixtures/styles'

class TimesheetCreateComponent extends Component {
  constructor(props) {
    super(props)

    const { id, timeFrom, timeTo, remarks } = props

    this.state = {
      id,
      timeFrom: timeFrom || '00:00',
      timeTo: timeTo || '00:00',
      remarks: remarks,
      timePickerShow: false,
      timePickerType: 'from',
      timePickerValue: new Date(),
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit() {
    const { timeFrom, timeTo, remarks } = this.state

    this.props.onSubmit({ timeFrom, timeTo, remarks })
  }

  handleShowTimePicker(type) {
    const { timePickerValue, timeFrom, timeTo } = this.state
    let timeArray

    if (type === 'from') {
      timeArray = timeFrom.split(':')
    } else {
      timeArray = timeTo.split(':')
    }

    timePickerValue.setHours(timeArray[0])
    timePickerValue.setMinutes(timeArray[1])

    this.setState({ timePickerShow: true, timePickerType: type, timePickerValue })
  }

  Remarks() {
    return (
      <CardItem key="remarks" style={{ alignItems: 'flex-start' }}>
        <Label style={{ ...styles.labelInCard }}>Remarks</Label>
        <Textarea
          bordered
          style={{
            ...styles.textArea,
            ...styles.borderRadius,
            flex: 1,
          }}
          value={this.state.remarks}
          onChangeText={(remarks) => this.setState({ remarks })}
        />
      </CardItem>
    )
  }

  To() {
    return (
      <CardItem key="to">
        <Label style={styles.labelInCard}>To</Label>
        <TouchableOpacity onPress={() => this.setState({ timePickerShow: true, timePickerType: 'to' })}>
          <Text>{this.state.timeTo}</Text>
        </TouchableOpacity>
      </CardItem>
    )
  }

  From() {
    return (
      <CardItem key="from">
        <Label style={styles.labelInCard}>From</Label>
        <TouchableOpacity onPress={() => this.handleShowTimePicker('from')}>
          <Text>{this.state.timeFrom}</Text>
        </TouchableOpacity>
      </CardItem>
    )
  }

  renderHeader() {
    return (
      <CardItem key="modalHeader" style={{ ...styles.borderTopRadius, width: 400, backgroundColor: '#D8D8D8' }}>
        <Text style={{ flex: 1 }}>New Timesheet</Text>
        <Icon name="close" style={{ ...styles.icon, textAlign: 'right' }} onPress={this.props.onCancel} />
      </CardItem>
    )
  }

  renderFooter() {
    return (
      <CardItem key="modalFooter" style={{ justifyContent: 'flex-end' }}>
        <Button transparent style={{ borderRadius: 0 }} onPress={this.props.onCancel}>
          <Text>Cancel</Text>
        </Button>
        <Button
          style={{ width: 90, borderRadius: 0, marginLeft: 16, backgroundColor: ACCENT_COLOR }}
          onPress={this.handleOnSubmit}
        >
          <Text style={{ textAlign: 'center', flex: 1 }}>OK</Text>
        </Button>
      </CardItem>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <Card style={{ ...styles.borderRadius, elevation: 100 }}>
          {this.renderHeader()}
          {this.From()}
          {this.To()}
          {this.Remarks()}
          {this.renderFooter()}
        </Card>
        {this.state.timePickerShow && (
          <RNDateTimePicker
            is24Hour={true}
            mode="time"
            value={this.state.timePickerValue}
            onChange={(event, date) => {
              let params = { timePickerShow: false }

              if (date) {
                if (this.state.timePickerType === 'from') {
                  params.timeFrom = moment(date).format('HH:mm')
                } else if (this.state.timePickerType === 'to') {
                  params.timeTo = moment(date).format('HH:mm')
                }
              }

              this.setState(params)
            }}
          />
        )}
      </View>
    )
  }
}

export default TimesheetCreateComponent
