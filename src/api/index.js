import { LOGIN_URL } from '../fixtures/backendUrl'
import { get, post, put, request } from './base'

export default {
  login: (username, password) => {
    return post(LOGIN_URL, { username, password })
  },
}
