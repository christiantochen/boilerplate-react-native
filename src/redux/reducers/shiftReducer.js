import moment from 'moment-timezone'
import createReducer from '../../lib/createReducer'
import {
  SHIFT_ACTION_SET_CLOCK_IN,
  SHIFT_ACTION_SET_CLOCK_OUT,
  SHIFT_ACTION_SET_CURRENT,
  SHIFT_ACTION_SET_LIST,
  SHIFT_ACTION_SET_ERROR,
} from '../actions'
import { ABSENT, CLOCKED_OUT, CLOCKED_IN } from '../../fixtures/enum'

const initialState = {
  lastSyncDate: '1991-01-01T00:00:00+07',
  list: [],
  current: {},
  error: undefined,
}

export const shift = createReducer(initialState, {
  [SHIFT_ACTION_SET_LIST](state, action) {
    const { list } = action

    return {
      ...state,
      list,
      error: null,
    }
  },
  [SHIFT_ACTION_SET_CURRENT](state, action) {
    const { current } = action

    if (!current.status) current.status = ABSENT

    return {
      ...state,
      current,
      error: null,
    }
  },
  [SHIFT_ACTION_SET_CLOCK_IN](state) {
    return {
      ...state,
      current: {
        ...current,
        status: CLOCKED_IN,
        clockInAt: moment().format(),
      },
      error: null,
    }
  },
  [SHIFT_ACTION_SET_CLOCK_OUT](state) {
    return {
      ...state,
      current: {
        ...current,
        status: CLOCKED_OUT,
        clockOutAt: moment().format(),
      },
      error: null,
    }
  },
  [SHIFT_ACTION_SET_ERROR](state, action) {
    const { error } = action

    return {
      ...state,
      error,
    }
  },
})
