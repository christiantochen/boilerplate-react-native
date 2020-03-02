import { put, call, select } from 'redux-saga/effects'
import { getTrendingManga } from '../../api'
import { trendingMangaAction } from '../actions'

// Our worker Saga that logins the user
export default function* fetchTrendingManga(action) {
  const response = yield call(getTrendingManga)
  yield put(trendingMangaAction.fetchSuccess(response.data))
}
