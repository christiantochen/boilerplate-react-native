import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Modal, TouchableOpacity } from 'react-native'
import { Card, CardItem, Text, Picker, Label, Button, Icon, Toast, Input } from 'native-base'
import styles from './styles'
import TimesheetCreateComponent from './timesheetCreateComponent'
import TimesheetComponent from './timesheetComponent'
import UUIDGenerator from 'react-native-uuid-generator'

function rangeBetween(start, end) {
  return Array.apply(null, Array(end - start + 1)).map((val, idx) => (val ? val + idx : start + idx))
}

class LocationDetailComponent extends Component {
  constructor(props) {
    super(props)

    const { id, seam, sectionPrefix, sectionFrom, sectionTo, elevation, others, timesheets } = props

    this.state = {
      id,
      seam,
      sectionPrefix,
      sectionFrom,
      sectionTo,
      elevation,
      others,
      timesheets,
      modalTimesheetShow: false,
    }

    this.Seam = this.Seam.bind(this)
    this.Section = this.Section.bind(this)
    this.handleTimesheetModal = this.handleTimesheetModal.bind(this)
    this.handleViewOthers = this.handleViewOthers.bind(this)
    this.handleSectionToChange = this.handleSectionToChange.bind(this)
    this.handleSectionFromChange = this.handleSectionFromChange.bind(this)
  }

  handleTimesheetModal() {
    this.setState({ modalTimesheetShow: !this.state.modalTimesheetShow })
  }

  handleViewOthers() {
    Toast.show({ text: 'In Development' })
  }

  handleSectionFromChange(value) {
    if (this.state.sectionTo < value) this.setState({ sectionTo: value, sectionFrom: value })
    else this.setState({ sectionFrom: value })
  }

  handleSectionToChange(value) {
    if (this.state.sectionFrom > value) this.setState({ sectionTo: value, sectionFrom: value })
    else this.setState({ sectionTo: value })
  }

  handleShowTime(type) {
    this.setState({ modalTimesheetFromShow: true })
  }

  render() {
    const cardContainerStyle = { ...styles.borderRadius, marginBottom: 16, ...this.props.styles }

    return (
      <Card style={cardContainerStyle}>
        {this.cardHeader('Location Details')}
        {this.Seam({ ...styles.borderBottomDivider, height: 44 })}
        {this.Section({ ...styles.borderBottomDivider, height: 44 })}
        {this.Elevation({ ...styles.borderBottomDivider, height: 44 })}
        {this.Timesheet({ height: 44 })}
        {this.TimesheetItems()}
        {this.cardFooter()}
        {this.TimesheetModal()}
      </Card>
    )
  }

  TimesheetModal() {
    return (
      <Modal transparent={true} visible={this.state.modalTimesheetShow}>
        <TimesheetCreateComponent
          onCancel={this.handleTimesheetModal}
          onSubmit={async (timesheet) => {
            const { timesheets } = this.state
            timesheet.id = await UUIDGenerator.getRandomUUID()
            timesheets.push(timesheet)
            this.setState({ timesheets, modalTimesheetShow: false })
          }}
        />
      </Modal>
    )
  }

  TimesheetItems() {
    const { timesheets } = this.state
    const display = timesheets.length ? 'flex' : 'none'

    return (
      <CardItem key="TimesheetItems" style={{ flexDirection: 'column', display }}>
        {this.state.timesheets.map((timesheet, index) => (
          <TimesheetComponent
            key={timesheet.id}
            style={index !== 0 ? { paddingTop: 12 } : null}
            timesheet={timesheet}
            onRemove={() => {
              const { timesheets } = this.state
              timesheets.splice(index, 1)
              this.setState({ timesheets })
            }}
          />
        ))}
      </CardItem>
    )
  }

  Timesheet(style) {
    return (
      <CardItem key="timesheet" style={style}>
        <Label style={styles.labelInCard}>Timesheet(s)</Label>
        <Text style={{ fontSize: 14 }}>{this.state.timesheets.length}</Text>
      </CardItem>
    )
  }

  Elevation(style) {
    return (
      <CardItem key="elevation" style={style}>
        <Label style={styles.labelInCard}>Elevation</Label>
        <Input
          style={{
            ...styles.input,
            paddingBottom: 4,
            marginBottom: -4,
          }}
          keyboardType="number-pad"
          placeholder="0.00"
          placeholderTextColor="#AFAFB9"
        />
      </CardItem>
    )
  }

  Section(style) {
    return (
      <CardItem key="section" style={style}>
        <Label style={styles.labelInCard}>Section</Label>
        <Text style={{ fontSize: 14 }}>{`${this.state.sectionPrefix}`}</Text>
        <View style={styles.pickerContainer}>
          <Picker
            mode="dialog"
            style={styles.picker}
            selectedValue={this.state.sectionFrom}
            onValueChange={this.handleSectionFromChange}
          >
            {rangeBetween(this.props.operationalPlan.sectionFrom, this.props.operationalPlan.sectionTo).map(
              (number) => (
                <Picker.Item key={`SECTION_FROM_${number}`} label={number.toString()} value={number} />
              )
            )}
          </Picker>
        </View>
        <Text style={{ fontSize: 14, marginHorizontal: 8 }}>to</Text>
        <View style={styles.pickerContainer}>
          <Picker
            mode="dialog"
            style={styles.picker}
            selectedValue={this.state.sectionTo}
            onValueChange={this.handleSectionToChange}
          >
            {rangeBetween(this.props.operationalPlan.sectionFrom, this.props.operationalPlan.sectionTo).map(
              (number) => (
                <Picker.Item key={`SECTION_TO_${number}`} label={number.toString()} value={number} />
              )
            )}
          </Picker>
        </View>
      </CardItem>
    )
  }

  Seam(style) {
    return (
      <CardItem key="seam" style={style}>
        <Label style={styles.labelInCard}>Seam</Label>
        <View style={styles.pickerContainer}>
          <Picker
            mode="dropdown"
            style={styles.picker}
            selectedValue={this.state.seam}
            onValueChange={(seam) => this.setState({ seam })}
          >
            {this.props.operationalPlan.seams.map((seam) => (
              <Picker.Item key={seam} label={seam} value={seam} />
            ))}
          </Picker>
        </View>
      </CardItem>
    )
  }

  cardFooter() {
    return (
      <CardItem
        key="footer"
        style={{ justifyContent: 'flex-end', ...styles.borderTopDivider, ...styles.borderBottomRadius }}
      >
        <Button bordered style={{ ...styles.locationDetailButton, marginRight: 8 }} onPress={this.handleTimesheetModal}>
          <Icon style={styles.locationDetailButtonIcon} type="MaterialIcons" name="add-alarm" />
          <Text style={styles.locationDetailButtonText}>Add Timesheet</Text>
        </Button>
        <Button bordered style={styles.locationDetailButton} onPress={this.handleViewOthers}>
          <Icon style={styles.locationDetailButtonIcon} type="MaterialIcons" name="assignment-turned-in" />
          <Text style={styles.locationDetailButtonText}>View Others</Text>
        </Button>
      </CardItem>
    )
  }

  cardHeader(title) {
    return (
      <CardItem key="header" style={{ ...styles.borderTopRadius, padding: 16, backgroundColor: '#D8D8D8' }}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </CardItem>
    )
  }
}

LocationDetailComponent.propTypes = {
  styles: PropTypes.object,
}

export default LocationDetailComponent
