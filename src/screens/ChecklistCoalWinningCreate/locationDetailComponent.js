import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, CardItem, Text, Picker, Label, Button, Icon, Toast, Input, Item } from 'native-base'
import { ACCENT_COLOR } from '../../fixtures/styles'
import styles from './styles'

class LocationDetailComponent extends Component {
  constructor(props) {
    super(props)

    const { id, seam, sectionPrefix, sectionFrom, sectionTo, elevation, others } = props

    this.state = {
      id,
      seam,
      sectionPrefix,
      sectionFrom,
      sectionTo,
      elevation,
      others,
    }

    this.Seam = this.Seam.bind(this)
    this.Section = this.Section.bind(this)
    this.addTimesheet = this.addTimesheet.bind(this)
    this.viewOthers = this.viewOthers.bind(this)
    this.handleSectionToChange = this.handleSectionToChange.bind(this)
    this.handleSectionFromChange = this.handleSectionFromChange.bind(this)
  }

  rangeBetween(start, end) {
    return Array.apply(null, Array(end - start + 1)).map((val, idx) => (val ? val + idx : start + idx))
  }

  addTimesheet() {
    Toast.show({ text: 'In Development' })
  }

  viewOthers() {
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

  render() {
    return (
      <Card style={{ ...styles.borderRadius, marginBottom: 16 }}>
        {this.cardHeader('Location Details')}
        {this.Seam({ ...styles.borderBottomDivider, height: 44 })}
        {this.Section({ ...styles.borderBottomDivider, height: 44 })}
        {this.Elevation({ ...styles.borderBottomDivider, height: 44 })}
        {this.Timesheet({ ...styles.borderBottomDivider, height: 44 })}
        {this.cardFooter()}
      </Card>
    )
  }

  Timesheet(style) {
    return (
      <CardItem key="timesheet" style={style}>
        <Label style={styles.labelInCard}>Timesheet(s)</Label>
        <Text style={{ fontSize: 14 }}></Text>
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
        <View style={styles.dropdownPickerContainer}>
          <Picker
            mode="dialog"
            style={styles.dropdownPicker}
            selectedValue={this.state.sectionFrom}
            onValueChange={this.handleSectionFromChange}
          >
            {this.rangeBetween(this.props.operationalPlan.sectionFrom, this.props.operationalPlan.sectionTo).map(
              (number) => (
                <Picker.Item key={`SECTION_FROM_${number}`} label={number.toString()} value={number} />
              )
            )}
          </Picker>
        </View>
        <View style={styles.dropdownPickerContainer}>
          <Picker
            mode="dialog"
            style={styles.dropdownPicker}
            selectedValue={this.state.sectionTo}
            onValueChange={this.handleSectionToChange}
          >
            {this.rangeBetween(this.props.operationalPlan.sectionFrom, this.props.operationalPlan.sectionTo).map(
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
        <View style={styles.dropdownPickerContainer}>
          <Picker
            mode="dropdown"
            style={styles.dropdownPicker}
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
      <CardItem key="footer" style={{ justifyContent: 'flex-end', ...styles.borderBottomRadius }}>
        <Button bordered style={{ ...styles.locationDetailButton, marginRight: 8 }} onPress={this.addTimesheet}>
          <Icon style={styles.locationDetailButtonIcon} type="MaterialIcons" name="add-alarm" />
          <Text style={styles.locationDetailButtonText}>Add Timesheet</Text>
        </Button>
        <Button bordered style={styles.locationDetailButton} onPress={this.viewOthers}>
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

export default LocationDetailComponent
