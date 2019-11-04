/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer'
import {
  GET_OPERATIONAL_PLAN_REQUEST,
  GET_OPERATIONAL_PLAN_SUCCEED,
  GET_OPERATIONAL_PLAN_FAILED,
} from '../fixtures/actionTypes'

const initialState = {
  lastSyncDate: null,
}

export const operationalPlanReducer = createReducer(initialState, {
  [GET_OPERATIONAL_PLAN_REQUEST](state) {
    return {
      ...state,
    }
  },
  [GET_OPERATIONAL_PLAN_SUCCEED](state, response) {
    let operationalPlan = state[response.pit]

    if (!operationalPlan || response.data.length) {
      operationalPlan = response.data
    }

    return {
      ...state,
      lastSyncDate: new Date(),
      [response.pit]: operationalPlan,
    }
  },
  [GET_OPERATIONAL_PLAN_FAILED](state) {
    return {
      ...state,
    }
  },
})
