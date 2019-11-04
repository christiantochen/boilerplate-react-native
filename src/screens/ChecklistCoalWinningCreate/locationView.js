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
