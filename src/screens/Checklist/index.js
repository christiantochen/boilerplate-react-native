import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChecklistView from './view'
import DrawerMenu from '../../components/DrawerMenu'
import { ChecklistAction } from '../../actions'

class ChecklistContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Checklist',
    headerLeft: <DrawerMenu />,
  })

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchChecklist()
  }

  render() {
    return <ChecklistView {...this.props} />
  }
}

function mapStateToProps(state) {
  const selectedPitId = state.sessionReducer.selectedPit ? state.sessionReducer.selectedPit.id : 0

  return {
    checklistPerPit: state.checklistReducer[selectedPitId] || {},
    checklist: state.checklistReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChecklist: (types) =>
      dispatch(
        ChecklistAction.getChecklistRequest({
          types: [
            'COAL_WINNING',
            'OB_REMOVAL',
            'DUMPING',
            'BLASTING',
            'SUPPORT_EQUIPMENT',
            'RAINFALL',
          ],
        })
      ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecklistContainer)
