import React, { Component } from 'react'
import { ScrollView, View, Image } from 'react-native'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'
import { Card, CardItem, Toast } from 'native-base'
import { Text, FAIcon } from '../../components'
import PunchButton from './PunchButton'

class ExploreView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 16,
            paddingHorizontal: 24,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}
        >
          <FAIcon name="user" size={32} style={{ marginRight: 16 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Welcome back</Text>
            <Text>Christianto Chen</Text>
          </View>
          <View style={{ alignSelf: 'flex-start' }}>
            <Text style={{ fontSize: 12, color: '#30a430' }}>You're in office network</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: '1%' }}>
          <PunchButton />
        </View>
        <ScrollView contentContainerStyle={{ padding: 8 }}>
          <Text>Test</Text>
        </ScrollView>
      </>
    )
  }
}

ExploreView.propTypes = {}

export default ExploreView
