import React, { Component } from 'react'
import { TouchableOpacity as GestureHandlerTouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { View } from 'react-native'
import { getDistance, getPreciseDistance } from 'geolib'
import { Text, FAIcon } from '../../components'

const Wrapper = styled.View`
  background-color: #4182e6;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`

const TouchableOpacity = styled(GestureHandlerTouchableOpacity)`
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  padding: 8px;
`

const Icon = styled(FAIcon)`
  margin-right: 16px;
`

class ProfileCard extends Component {
  Icon = ['hourglass', 'hourglass-start', 'hourglass-half', 'hourglass-end']
  Text = { undefined: 'Clock In', CLOCKED_IN: 'Clock Out' }

  render() {
    return (
      <Wrapper key={this.props.key} style={this.props.style}>
        <Icon name="user" size={32} color="white" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>Welcome back</Text>
          <Text style={{ color: 'white' }}>Christianto Chen</Text>
        </View>
        {this.props.position && (
          <View style={{ alignSelf: 'flex-start' }}>
            <Text
              style={{ fontSize: 12, color: '#82E682' }}
            >{`${this.props.position.coords.latitude}, ${this.props.position.coords.longitude}`}</Text>
            <Text style={{ fontSize: 12, color: '#82E682' }}>
              {`${getDistance({ longitude: 106.7831679, latitude: -6.2028364 }, this.props.position.coords)} m`}
            </Text>
          </View>
        )}
      </Wrapper>
    )
  }
}

ProfileCard.propTypes = {
  key: PropTypes.string,
  style: PropTypes.object,
}

export default ProfileCard
