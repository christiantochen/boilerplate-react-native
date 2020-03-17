import React, { Component } from 'react'
import { ScrollView, View, Image } from 'react-native'
import { TouchableOpacity as GestureHandlerTouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment-timezone'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, FAIcon } from '../../../components'
import { Toast } from 'native-base'

const Wrapper = styled.View`
  /* flex-grow: 1; */
  flex-basis: 23%;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
`

const TouchableOpacity = styled(GestureHandlerTouchableOpacity)`
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  padding: 8px;
`

const Icon = styled(FAIcon)`
  margin-bottom: 4px;
`

class PunchButton extends Component {
  Icon = ['hourglass', 'hourglass-start', 'hourglass-half', 'hourglass-end']
  Text = ['Punch In', 'Punch Out']
  Message = ['']

  onPress() {
    const text = `Punched in!`
    Toast.show({ text, position: 'center' })
  }

  render() {
    return (
      <Wrapper key={this.props.key}>
        <TouchableOpacity style={this.props.style} onPress={this.onPress.bind(this)}>
          <Icon name={this.Icon[0]} size={24} />
          <Text children={this.Text[0]} />
        </TouchableOpacity>
      </Wrapper>
    )
  }
}

PunchButton.propTypes = {
  key: PropTypes.string,
  style: PropTypes.object,
}

export default PunchButton
