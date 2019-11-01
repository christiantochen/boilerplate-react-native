/*
 * Reducer actions related with login
 */
import {
  GET_EXCAVATOR_REQUEST,
  GET_EXCAVATOR_SUCCEED,
  GET_EXCAVATOR_FAILED,
} from '../fixtures/actionTypes'

export default {
  getExcavatorRequest(opts = {}) {
    return {
      type: GET_EXCAVATOR_REQUEST,
      opts,
    }
  },
  getExcavatorSucceed(pit, data) {
    return {
      type: GET_EXCAVATOR_SUCCEED,
      pit,
      data,
    }
  },
  getExcavatorFailed() {
    return {
      type: GET_EXCAVATOR_FAILED,
    }
  },
}
