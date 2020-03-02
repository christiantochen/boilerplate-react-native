import { all, takeLatest } from 'redux-saga/effects'

import fetchTrendingManga from './trendingMangaSaga'
import { TRENDING_MANGA_FETCH } from '../actionTypes'

export default function* watch() {
  yield all([takeLatest(TRENDING_MANGA_FETCH, fetchTrendingManga)])
}
