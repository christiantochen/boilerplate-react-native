import * as sessionReducer from './sessionReducer'
import * as contractorReducer from './contractorReducer'
import * as checklistReducer from './checklistReducer'
import * as excavatorReducer from './excavatorReducer'

export default Object.assign(contractorReducer, checklistReducer, sessionReducer, excavatorReducer)
