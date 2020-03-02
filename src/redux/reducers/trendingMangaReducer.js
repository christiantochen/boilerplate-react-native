import lo from 'lodash'
import createReducer from '../../lib/createReducer'
import { TRENDING_MANGA_FETCH_SUCCESS } from '../actionTypes'

const initialState = {
  lastFetchDate: '1991-11-22T00:00:00+07',
  data: [],
}

export const trendingManga = createReducer(initialState, {
  [TRENDING_MANGA_FETCH_SUCCESS](state, action) {
    const { data } = action

    return {
      ...state,
      data,
    }
  },
})
