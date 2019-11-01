import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Card, CardItem, Text, Picker, Label, Button, Icon, Toast } from 'native-base'
import { ACCENT_COLOR } from '../../fixtures/styles'
import styles from './styles'

class LocationView extends Component {
  constructor(props) {
    super(props)

    const { locations } = props

    this.state = {
      locations,
    }
  }

  Timesheet(style) {
    return (
      <CardItem style={style}>
        <Label style={styles.labelInCard}>Timesheet(s)</Label>
        <Text style={{ fontSize: 14 }}></Text>
      </CardItem>
    )
  }

  Elevation(style) {
    return (
      <CardItem style={style}>
        <Label style={styles.labelInCard}>Elevation</Label>
        <Text style={{ fontSize: 14 }}></Text>
      </CardItem>
    )
  }

  Section(style) {
    return (
      <CardItem style={style}>
        <Label style={styles.labelInCard}>Section</Label>
        <Text style={{ fontSize: 14 }}></Text>
      </CardItem>
    )
  }

  Seam(style) {
    return (
      <CardItem style={style}>
        <Label style={styles.labelInCard}>Seam</Label>
        <Picker mode="dropdown" style={styles.dropdownPicker}></Picker>
      </CardItem>
    )
  }

  cardFooter() {
    return (
      <CardItem style={{ justifyContent: 'flex-end', ...styles.borderBottomRadius }}>
        <Button
          bordered
          style={{ ...styles.locationDetailButton, marginRight: 8 }}
          onPress={this.addTimesheet.bind(this)}
        >
          <Icon style={styles.locationDetailButtonIcon} type="MaterialIcons" name="add-alarm" />
          <Text style={styles.locationDetailButtonText}>Add Timesheet</Text>
        </Button>
        <Button bordered style={styles.locationDetailButton} onPress={this.viewOthers.bind(this)}>
          <Icon style={styles.locationDetailButtonIcon} type="MaterialIcons" name="assignment-turned-in" />
          <Text style={styles.locationDetailButtonText}>View Others</Text>
        </Button>
      </CardItem>
    )
  }

  cardHeader(title) {
    return (
      <CardItem style={{ ...styles.borderTopRadius, padding: 16, backgroundColor: '#D8D8D8' }}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </CardItem>
    )
  }

  addTimesheet() {
    Toast.show({ text: 'In Development' })
  }

  viewOthers() {
    Toast.show({ text: 'In Development' })
  }

  render() {
    return (
      <ScrollView style={{ padding: 16, display: this.props.show ? 'flex' : 'none' }}>
        <Card style={styles.borderRadius}>
          {this.cardHeader('Location Details')}
          {this.Seam(styles.borderBottomDivider)}
          {this.Section(styles.borderBottomDivider)}
          {this.Elevation(styles.borderBottomDivider)}
          {this.Timesheet(styles.borderBottomDivider)}
          {this.cardFooter()}
        </Card>
        <Icon
          type="MaterialIcons"
          name="add-circle"
          style={{
            flex: 1,
            marginTop: 16,
            marginBottom: 16,
            textAlign: 'center',
            fontSize: 48,
            color: ACCENT_COLOR,
          }}
        />
      </ScrollView>
    )
  }
}

export default LocationView
