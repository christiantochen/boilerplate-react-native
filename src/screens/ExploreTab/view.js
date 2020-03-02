import React, { Component } from 'react'
import { Text, ScrollView, View, Image } from 'react-native'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'

class ExploreView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchTrendingManga()
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <ScrollView horizontal={true}>
          {this.props.trendingManga.data.map((manga) => {
            return (
              <View>
                <Image
                  source={{ uri: manga?.attributes?.posterImage?.medium, height: 201, width: 142 }}
                  height={200}
                  width={75}
                />
                <Text>{manga?.attributes?.titles['en_jp']}</Text>
              </View>
            )
          })}
        </ScrollView>
        <ScrollView horizontal={true}>
          {this.props.trendingManga.data.map((manga) => {
            return (
              <View>
                <Image
                  source={{ uri: manga?.attributes?.posterImage?.medium, height: 201, width: 142 }}
                  height={200}
                  width={75}
                />
                <Text>{manga?.attributes?.titles['en_jp']}</Text>
              </View>
            )
          })}
        </ScrollView>
        <ScrollView horizontal={true}>
          {this.props.trendingManga.data.map((manga) => {
            return (
              <View>
                <Image
                  source={{ uri: manga?.attributes?.posterImage?.medium, height: 201, width: 142 }}
                  height={200}
                  width={75}
                />
                <Text>{manga?.attributes?.titles['en_jp']}</Text>
              </View>
            )
          })}
        </ScrollView>
        <ScrollView horizontal={true}>
          {this.props.trendingManga.data.map((manga) => {
            return (
              <View>
                <Image
                  source={{ uri: manga?.attributes?.posterImage?.medium, height: 201, width: 142 }}
                  height={200}
                  width={75}
                />
                <Text>{manga?.attributes?.titles['en_jp']}</Text>
              </View>
            )
          })}
        </ScrollView>
        <ScrollView horizontal={true}>
          {this.props.trendingManga.data.map((manga) => {
            return (
              <View>
                <Image
                  source={{ uri: manga?.attributes?.posterImage?.medium, height: 201, width: 142 }}
                  height={200}
                  width={75}
                />
                <Text>{manga?.attributes?.titles['en_jp']}</Text>
              </View>
            )
          })}
        </ScrollView>
        <ScrollView horizontal={true}>
          {this.props.trendingManga.data.map((manga) => {
            return (
              <View>
                <Image
                  source={{ uri: manga?.attributes?.posterImage?.medium, height: 201, width: 142 }}
                  height={200}
                  width={75}
                />
                <Text>{manga?.attributes?.titles['en_jp']}</Text>
              </View>
            )
          })}
        </ScrollView>
      </ScrollView>
    )
  }
}

ExploreView.propTypes = {}

export default ExploreView
