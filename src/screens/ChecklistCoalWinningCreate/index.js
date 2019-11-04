import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChecklistCoalWinningCreateView from './view'
import DrawerMenu from '../../components/DrawerMenu'
import { SessionAction } from '../../actions'

class ChecklistCoalWinningCreateContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Coal Winning',
    headerLeft: <DrawerMenu />,
  })

  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return <ChecklistCoalWinningCreateView {...this.props} />
  }
}

function mapStateToProps(state) {
  const selectedPit = state.sessionReducer.selectedPit
  return {
    selectedPit,
    excavators: state.excavatorReducer[selectedPit.id] || [],
    operationalPlan: state.operationalPlanReducer[selectedPit.id] || {},
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecklistCoalWinningCreateContainer)
