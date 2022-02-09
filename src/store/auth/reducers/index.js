/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as businessInfo from './businessInfo';

const initialState = {
  ...businessInfo.initialState,
};

export const authReducer = createReducer(initialState, {
  ...businessInfo.reducer,
});
