import React, { Component } from 'react'
import { Text, ScrollView, View, Image } from 'react-native'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'
import HorizontalScroll from './HorizontalScroll'

class ExploreView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchTrendingManga()
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'black' }} contentContainerStyle={{ paddingVertical: 16 }}>
        <HorizontalScroll title={'Trending'} data={this.props.trendingManga.data} />
      </ScrollView>
    )
  }
}

ExploreView.propTypes = {}

export default ExploreView
