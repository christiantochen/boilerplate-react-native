import * as sessionReducer from './sessionReducer'
import * as contractorReducer from './contractorReducer'
import * as checklistReducer from './checklistReducer'
import * as excavatorReducer from './excavatorReducer'
import * as operationalPlanReducer from './operationalPlanReducer'

export default Object.assign(
  contractorReducer,
  checklistReducer,
  sessionReducer,
  excavatorReducer,
  operationalPlanReducer
)
