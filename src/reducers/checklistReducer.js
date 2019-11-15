/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import lo from 'lodash'
import createReducer from '../lib/createReducer'
import {
  GET_CHECKLIST_REQUEST,
  GET_CHECKLIST_SUCCEED,
  GET_CHECKLIST_FAILED,
  GET_CHECKLIST_FINISHED,
  POST_CHECKLIST_REQUEST,
  DRAFT_CHECKLIST,
} from '../fixtures/actionTypes'

const initialState = {
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
    const { pit, checklistType, data } = response

    let checklist = state[pit] || {}

    if (data.length) {
      checklist['lastSyncDate'] = new Date()

      var mergedData = lo.unionBy(checklist[checklistType], data, 'id')

      checklist[checklistType] = mergedData
    }

    return {
      ...state,
      [pit]: checklist,
    }
  },
  [GET_CHECKLIST_FINISHED](state) {
    return {
      ...state,
      isLoading: false,
    }
  },
  [GET_CHECKLIST_FAILED](state) {
    return {
      ...state,
    }
  },
  [DRAFT_CHECKLIST](state, request) {
    const { checklistType, data } = request
    let checklist = state[data.pitId] || {}

    if (checklist[checklistType]) {
      var mergedData = lo.unionBy(checklist[checklistType], [data], 'id')
      checklist[checklistType] = mergedData
    } else {
      checklist[checklistType] = [data]
    }

    return {
      ...state,
      [checklist.pitId]: checklist,
    }
  },
})
