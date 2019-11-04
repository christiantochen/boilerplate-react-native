/*
 * Reducer actions related with login
 */
import {
  GET_OPERATIONAL_PLAN_REQUEST,
  GET_OPERATIONAL_PLAN_SUCCEED,
  GET_OPERATIONAL_PLAN_FAILED,
} from '../fixtures/actionTypes'

export default {
  getPitOperationalPlanRequest(opts = {}) {
    return {
      type: GET_OPERATIONAL_PLAN_REQUEST,
      opts,
    }
  },
  getPitOperationalPlanSucceed(pit, data) {
    return {
      type: GET_OPERATIONAL_PLAN_SUCCEED,
      pit,
      data,
    }
  },
  getPitOperationalPlanFailed() {
    return {
      type: GET_OPERATIONAL_PLAN_FAILED,
    }
  },
}
