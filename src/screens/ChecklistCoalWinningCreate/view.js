import React, { Component } from 'react'
import { Text, Card, CardItem, Button, Icon, Toast } from 'native-base'
import { View, ScrollView, RefreshControl } from 'react-native'
import { BACKGROUND_COLOR_WHITE, ACCENT_COLOR } from '../../fixtures/styles'
import { TouchableHighlight } from 'react-native-gesture-handler'

class ChecklistCoalWinningCreateView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 1,
    }
  }

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
            backgroundColor: BACKGROUND_COLOR_WHITE,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View
            style={{
              backgroundColor: ACCENT_COLOR,
              height: 1,
              position: 'absolute',
              left: 0,
              right: 0,
              left: 48,
              right: 48,
            }}
          />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableHighlight>
              <View
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  backgroundColor: this.state.step === 1 ? ACCENT_COLOR : '#D8D8D8',
                  borderColor: ACCENT_COLOR,
                  borderWidth: 1,
                  marginHorizontal: 32,
                  marginVertical: 16,
                }}
              />
            </TouchableHighlight>
            <Text
              style={{
                fontSize: 10,
                color: ACCENT_COLOR,
                position: 'absolute',
                top: 44,
                left: 22,
              }}
            >
              Equipment
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: this.state.step === 2 ? ACCENT_COLOR : '#D8D8D8',
                borderColor: ACCENT_COLOR,
                borderWidth: 1,
                marginHorizontal: 32,
                marginVertical: 16,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                color: ACCENT_COLOR,
                position: 'absolute',
                top: 44,
              }}
            >
              Support
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: this.state.step === 3 ? ACCENT_COLOR : '#D8D8D8',
                borderColor: ACCENT_COLOR,
                borderWidth: 1,
                marginHorizontal: 32,
                marginVertical: 16,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                color: ACCENT_COLOR,
                position: 'absolute',
                top: 44,
                right: 27,
              }}
            >
              Location
            </Text>
          </View>
        </View>
        <ScrollView></ScrollView>
      </View>
    )
  }
}

export default ChecklistCoalWinningCreateView
