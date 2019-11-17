import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChecklistCoalWinningSubmitView from './view'
import DrawerMenu from '../../components/DrawerMenu'
import { ChecklistAction } from '../../actions'

class ChecklistCoalWinningSubmitContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Coal Winning',
    headerLeft: <DrawerMenu />,
  })

  constructor(props) {
    super(props)
  }

  render() {
    return <ChecklistCoalWinningSubmitView {...this.props} />
  }
}

function mapStateToProps(state) {
  const selectedPit = state.sessionReducer.selectedPit

  return {
    selectedPit,
    excavators: (state.excavatorReducer[selectedPit.id] || []).filter(
      (excavator) => excavator.purpose === 'COAL_WINNING'
    ),
    operationalPlan: state.operationalPlanReducer[selectedPit.id],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveToDraft: (coalWinning) => dispatch(ChecklistAction.draftChecklist('COAL_WINNING', coalWinning)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecklistCoalWinningSubmitContainer)
