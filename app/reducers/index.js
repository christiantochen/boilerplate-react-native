/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as contractorReducer from './contractorReducer';

export default Object.assign(
    loginReducer,
    loadingReducer,
    contractorReducer);
