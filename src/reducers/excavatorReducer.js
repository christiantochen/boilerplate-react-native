/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer'
import {
  GET_EXCAVATOR_REQUEST,
  GET_EXCAVATOR_SUCCEED,
  GET_EXCAVATOR_FAILED,
} from '../fixtures/actionTypes'

const initialState = {
  lastSyncDate: null,
}

export const excavatorReducer = createReducer(initialState, {
  [GET_EXCAVATOR_REQUEST](state) {
    return {
      ...state,
    }
  },
  [GET_EXCAVATOR_SUCCEED](state, response) {
    let excavators = state[response.pit]

    if (!excavators || response.data.length) {
      excavators = response.data
    }

    return {
      ...state,
      lastSyncDate: new Date(),
      [response.pit]: excavators,
    }
  },
  [GET_EXCAVATOR_FAILED](state) {
    return {
      ...state,
    }
  },
})
