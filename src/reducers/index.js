import * as sessionReducer from './sessionReducer'
import * as contractorReducer from './contractorReducer'
import * as checklistReducer from './checklistReducer'

export default Object.assign(contractorReducer, checklistReducer, sessionReducer)
