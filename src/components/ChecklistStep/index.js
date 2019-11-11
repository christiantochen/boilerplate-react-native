import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'native-base'
import { View } from 'react-native'
import styles from './styles'
import { TouchableHighlight } from 'react-native-gesture-handler'

class ChecklistStep extends Component {
  constructor(props) {
    super(props)

    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress(value) {
    const { onPress } = this.props
    onPress && onPress(value)
  }

  createStep(step, value) {
    const { stepContainerStyle, stepTitleStyle, stepIconStyle, stepIconContainerStyle } = styles
    const backgroundColor = this.props.value === value ? this.props.stepActiveColor : this.props.stepColor
    const backgroundColorModifier = backgroundColor ? { backgroundColor } : {}

    return (
      <View key={value} style={stepContainerStyle}>
        <Text style={stepTitleStyle}>{step}</Text>
        <TouchableHighlight style={stepIconContainerStyle} onPress={() => this.handleOnPress(value)}>
          <View style={{ ...stepIconStyle, ...backgroundColorModifier }} />
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const { steps } = this.props

    return (
      <View style={styles.containerStyle}>
        <View style={styles.lineStyle} />
        {steps && steps.map((step, index) => this.createStep(step, index + 1))}
      </View>
    )
  }
}

ChecklistStep.propTypes = {
  steps: PropTypes.array,
  value: PropTypes.number,
  containerStyle: PropTypes.object,
  lineColor: PropTypes.string,
  stepColor: PropTypes.string,
  stepActiveColor: PropTypes.string,
  onPress: PropTypes.func,
}

export default ChecklistStep
