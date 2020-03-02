import { TRENDING_MANGA_FETCH, TRENDING_MANGA_FETCH_SUCCESS } from '../actionTypes'

export const fetch = () => {
  return {
    type: TRENDING_MANGA_FETCH,
  }
}

export const fetchSuccess = (data) => {
  return {
    type: TRENDING_MANGA_FETCH_SUCCESS,
    ...data,
  }
}
