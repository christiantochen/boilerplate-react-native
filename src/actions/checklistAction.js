/*
 * Reducer actions related with login
 */
import {
  GET_CHECKLIST_REQUEST,
  GET_CHECKLIST_SUCCEED,
  GET_CHECKLIST_FAILED,
  GET_CHECKLIST_FINISHED,
  SUBMIT_CHECKLIST,
  DRAFT_CHECKLIST,
} from '../fixtures/actionTypes'

export default {
  getChecklistRequest(opts = {}) {
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
  getChecklistFinished() {
    return { type: GET_CHECKLIST_FINISHED }
  },
  getChecklistFailed() {
    return { type: GET_CHECKLIST_FAILED }
  },
  //
  draftChecklist(checklistType, data) {
    return { type: DRAFT_CHECKLIST, checklistType, data }
  },
  submitChecklist(checklistType, checklist) {
    return { type: SUBMIT_CHECKLIST }
  },
}
