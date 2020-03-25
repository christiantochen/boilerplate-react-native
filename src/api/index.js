import { request, get, put, post } from './base'
import { REFRESH_TOKEN_URL } from '../fixtures/backendUrl'
import axios from 'axios'

const refreshToken = (token) => {
  return axios.post(REFRESH_TOKEN_URL, { token })
}

export default {
  refreshToken,
}
