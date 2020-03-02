import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './view'
import { trendingMangaAction } from '../../redux/actions'

class ExploreContainer extends Component {
  static navigationOptions = () => ({
    title: 'Explore',
  })

  render() {
    return <View {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    trendingManga: state.trendingManga,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrendingManga: () => dispatch(trendingMangaAction.fetch()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer)
