import * as loginReducer from '../containers/Login/reducer';
import * as contractorReducer from './contractors/reducer';

export default Object.assign(loginReducer, contractorReducer)