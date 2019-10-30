/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer'
import {
  GET_CHECKLIST_REQUEST,
  GET_CHECKLIST_SUCCEED,
  GET_CHECKLIST_FAILED,
} from '../fixtures/actionTypes'

const initialState = {
  lastSyncDate: null,
  isLoading: false,
}

export const checklistReducer = createReducer(initialState, {
  [GET_CHECKLIST_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
    }
  },
  [GET_CHECKLIST_SUCCEED](state, response) {
    let checklist = state[response.pit] || {}

    if (!checklist || response.data.length) {
      checklist[response.checklistType] = response.data
    }

    return {
      ...state,
      lastSyncDate: new Date(),
      [response.pit]: checklist,
      isLoading: false,
    }
  },
  [GET_CHECKLIST_FAILED](state) {
    return {
      ...state,
      isLoading: false,
    }
  },
})
