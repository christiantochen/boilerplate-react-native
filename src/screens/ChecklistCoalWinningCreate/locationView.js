import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Card, CardItem, Text, Picker, Label, Button, Icon } from 'native-base'
import { ACCENT_COLOR } from '../../fixtures/styles'

class LocationView extends Component {
  constructor(props) {
    super(props)

    const { locations } = props

    this.state = {
      locations,
    }
  }

  render() {
    return (
      <ScrollView style={{ padding: 16, display: this.props.show ? 'flex' : 'none' }}>
        <Card style={{ borderRadius: 12 }}>
          <CardItem
            style={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              padding: 16,
              backgroundColor: '#D8D8D8',
            }}
          >
            <Text>Location Details</Text>
          </CardItem>
          <CardItem
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#AFAFB9',
              padding: 16,
            }}
          >
            <Label style={{ flex: 1, fontSize: 14 }}>Seam</Label>
            <Picker
              mode="dropdown"
              placeholder="Select Excavator"
              style={{
                width: undefined,
                height: 16,
                padding: 0,
                marginTop: 3,
                marginRight: -22,
                transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
              }}
              itemStyle={{ fontSize: 14 }}
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              //   selectedValue={this.state.excavatorId}
              //   onValueChange={this.onExcavatorChange.bind(this)}
            ></Picker>
          </CardItem>
          <CardItem
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#AFAFB9',
              padding: 16,
            }}
          >
            <Label style={{ flex: 1, fontSize: 14 }}>Section</Label>
          </CardItem>
          <CardItem
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#AFAFB9',
              padding: 16,
            }}
          >
            <Label style={{ flex: 1, fontSize: 14 }}>Elevation</Label>
          </CardItem>
          <CardItem
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#AFAFB9',
              padding: 16,
            }}
          >
            <Label style={{ flex: 1, fontSize: 14 }}>Timesheet(s)</Label>
          </CardItem>
          <CardItem
            style={{
              justifyContent: 'flex-end',
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              padding: 16,
            }}
          >
            <Button
              transparent
              bordered
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0,
                paddingLeft: 0,
                height: 40,
                marginRight: 8,
                borderColor: ACCENT_COLOR,
              }}
            >
              <Icon
                style={{
                  fontSize: 18,
                  marginLeft: 8,
                  marginRight: 6,
                  color: ACCENT_COLOR,
                }}
                type="MaterialIcons"
                name="add-alarm"
              />
              <Text style={{ paddingLeft: 0, paddingRight: 8, fontSize: 12, color: ACCENT_COLOR }}>
                Add Timesheet
              </Text>
            </Button>
            <Button
              transparent
              bordered
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0,
                paddingLeft: 0,
                height: 40,
                borderColor: ACCENT_COLOR,
              }}
            >
              <Icon
                style={{
                  fontSize: 18,
                  marginLeft: 8,
                  marginRight: 6,
                  color: ACCENT_COLOR,
                }}
                type="MaterialIcons"
                name="assignment-turned-in"
              />
              <Text style={{ paddingLeft: 0, paddingRight: 8, fontSize: 12, color: ACCENT_COLOR }}>
                View Others
              </Text>
            </Button>
          </CardItem>
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
