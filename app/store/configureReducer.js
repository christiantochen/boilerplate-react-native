import * as sessionReducer from '../models/sessions/reducer';
import * as contractorReducer from '../models/contractors/reducer';
import * as pitSelectionReducer from '../containers/PitSelection/reducer';

export default Object.assign(
    sessionReducer,
    contractorReducer,
    pitSelectionReducer)