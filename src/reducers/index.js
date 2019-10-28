import * as sessionReducer from './sessionReducer';
import * as contractorReducer from './contractorReducer';

export default Object.assign(
    contractorReducer,
    sessionReducer)