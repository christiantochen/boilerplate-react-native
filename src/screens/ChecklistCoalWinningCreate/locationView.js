import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Icon, Button } from 'native-base'
import { ACCENT_COLOR } from '../../fixtures/styles'
import styles from './styles'
import LocationDetailComponent from './locationDetailComponent'

class LocationView extends Component {
  constructor(props) {
    super(props)

    const { locations } = props

    this.state = {
      locations,
    }

    this.handleAddDetail = this.handleAddDetail.bind(this)
  }

  handleAddDetail() {
    const { locations } = this.state
    const { operationalPlan } = this.props

    locations.push({
      id: locations.length + 1,
      seam: operationalPlan.seams[0],
      sectionPrefix: operationalPlan.sectionPrefix,
      sectionFrom: operationalPlan.sectionFrom,
      sectionTo: operationalPlan.sectionTo,
      elevation: 0,
      others: [],
      timesheets: [],
    })

    this.setState({ locations })
  }

  render() {
    return (
      <View style={{ flex: 1, display: this.props.show ? 'flex' : 'none' }}>
        <ScrollView style={{ paddingHorizontal: 16 }}>
          <View style={{ height: 16 }} />
          {this.state.locations.map((location) => (
            <LocationDetailComponent key={location.id} {...location} operationalPlan={this.props.operationalPlan} />
          ))}
          <View style={{ height: 16 }} />
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            left: 0,
            right: 0,
            bottom: -24,
          }}
        >
          <Button
            style={{
              width: 48,
              height: 48,
              backgroundColor: ACCENT_COLOR,
              borderRadius: 24,
              elevation: 5,
              justifyContent: 'center',
            }}
            onPress={this.handleAddDetail}
          >
            <Icon name="add" style={{ fontSize: 24 }} />
          </Button>
        </View>
      </View>
    )
  }
}

export default LocationView
