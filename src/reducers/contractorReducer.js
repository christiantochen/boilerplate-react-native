/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import {
  GET_CONTRACTORS_REQUEST,
  GET_CONTRACTORS_SUCCEED,
  GET_CONTRACTORS_FAILED
} from '../fixtures/actionTypes';

const initialState = {
  contractors: [],
  lastSyncDate: null
};

export const contractorReducer = createReducer(initialState, {
  [GET_CONTRACTORS_REQUEST](state) {
    return {
      ...state
    };
  },
  [GET_CONTRACTORS_SUCCEED](state, action) {
    let contractors = state.contractors;
    
    if(action.data.length) {
        contractors = action.data;
    }

    return {
      ...state,
      lastSyncDate: new Date(),
      contractors
    };
  },
  [GET_CONTRACTORS_FAILED](state) {
    return {
      ...state
    };
  }
});
