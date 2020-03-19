import React, { Component } from 'react'
import { TouchableOpacity as GestureHandlerTouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, FAIcon } from '../../components'

const Wrapper = styled.View`
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

class Button extends Component {
  Icon = ['hourglass', 'hourglass-start', 'hourglass-half', 'hourglass-end']
  Text = { undefined: 'Clock In', CLOCKED_IN: 'Clock Out' }

  render() {
    return (
      <Wrapper key={this.props.key}>
        {this.props.editable ? (
          <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
            <Icon name={this.Icon[0]} size={24} />
            <Text children={this.Text[this.props.status]} />
          </TouchableOpacity>
        ) : (
          <>
            <Icon name={this.Icon[0]} size={24} />
            <Text children={this.Text[this.props.status]} />
          </>
        )}
      </Wrapper>
    )
  }
}

Button.propTypes = {
  key: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  status: PropTypes.string,
  editable: PropTypes.bool,
}

export default Button
