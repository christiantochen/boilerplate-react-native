/*
 * Reducer actions related with login
 */
import { GET_CHECKLIST_REQUEST, GET_CHECKLIST_SUCCEED, GET_CHECKLIST_FAILED } from '../fixtures/actionTypes'

export default {
  getChecklistRequest(opts = {}) {
    console.log('getChecklistRequest GET_CHECKLIST_REQUEST')
    return {
      type: GET_CHECKLIST_REQUEST,
      opts,
    }
  },
  getChecklistSucceed(pit, checklistType, data) {
    return {
      type: GET_CHECKLIST_SUCCEED,
      pit,
      checklistType,
      data,
    }
  },
  getChecklistFailed() {
    return {
      type: GET_CHECKLIST_FAILED,
    }
  },
}
