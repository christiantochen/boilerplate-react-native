import React, { Component } from 'react'
import { ScrollView, View, Dimensions } from 'react-native'
import { Text, FAIcon } from '../../components'
import Button from './Button'
import ProfileCard from './ProfileCard'
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
// const LATITUDE_DELTA = 0.015
const LATITUDE_DELTA = 0.15
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class ExploreView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ProfileCard position={this.props.location.position} />
        {this.props.location.position && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            initialRegion={{
              latitude: this.props.location.position.coords.latitude,
              longitude: this.props.location.position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            showsUserLocation={true}
          >
            {/* {this.props.location.data
              .map(({ longitude, latitude }) => (
                <Circle
                  center={{ longitude, latitude }}
                  radius={25}
                  strokeWidth={1}
                  strokeColor={'#FF414188'}
                  fillColor={'#FF828222'}
                />
              ))} */}
            {this.props.location.data.map(({ id, name, longitude, latitude }) => (
              <Marker key={id} coordinate={{ longitude, latitude }} title={name} />
            ))}
          </MapView>
        )}
        {/* <ProfileCard />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 8 }}>
            <Button />
          </View>
          <ScrollView contentContainerStyle={{ padding: 8 }}>
            
          </ScrollView> */}
      </View>
    )
  }
}

ExploreView.propTypes = {}

export default ExploreView
