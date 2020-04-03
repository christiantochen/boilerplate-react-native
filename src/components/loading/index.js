import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ActivityIndicator, Wrapper } from './styles'

class Loading extends Component {
  render() {
    if (!this.props.loading) {
      return null
    }

    return (
      <Wrapper>
        <ActivityIndicator animating={true} />
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
  }
}

Loading.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, null)(Loading)
