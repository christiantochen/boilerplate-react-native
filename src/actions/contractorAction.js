/*
 * Reducer actions related with login
 */
import {
  GET_CONTRACTORS_REQUEST,
  GET_CONTRACTORS_SUCCEED,
  GET_CONTRACTORS_FAILED
} from '../fixtures/actionTypes';

export default {
  getContractorsRequest(opts = {}) {
    return {
      type: GET_CONTRACTORS_REQUEST,
      opts
    };
  },
  getContractorSucceed(data) {
    return {
      type: GET_CONTRACTORS_SUCCEED,
      data
    };
  },
  getContractorFailed() {
    return {
      type: GET_CONTRACTORS_FAILED
    };
  }
};
