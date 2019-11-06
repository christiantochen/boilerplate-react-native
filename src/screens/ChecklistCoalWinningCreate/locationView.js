import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Icon } from 'native-base'
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
      <ScrollView style={{ padding: 16, display: this.props.show ? 'flex' : 'none' }}>
        {this.state.locations.map((location) => (
          <LocationDetailComponent key={location.id} {...location} operationalPlan={this.props.operationalPlan} />
        ))}
        <Icon
          type="MaterialIcons"
          name="add-circle"
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 48,
            color: ACCENT_COLOR,
          }}
          onPress={this.handleAddDetail}
        />
      </ScrollView>
    )
  }
}

export default LocationView
