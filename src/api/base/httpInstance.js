import axios from 'axios'
import { Toast } from 'native-base'
import env from 'react-native-config'

import { REFRESH_TOKEN_URL } from '../../fixtures/backendUrl'
import { store } from '../../redux'
import { AUTH_ACTION_EXPIRED, AUTH_ACTION_SET_TOKEN } from '../../redux/actions'

export const SERVER_URL = env.API_HOST

const baseURL = env.BACKEND_URL
const httpInstance = axios.create({ timeout: 10000, baseURL })

const handleResponse = (res) => {
  if (!res) return { ok: false }

  const { data, status } = res

  return { ok: status && status >= 200 && status < 300, status, data }
}

const isAccessTokenExpired = (res) => res?.status === 401
const isServerFault = (res) => res?.status >= 500 || res?.status < 600

const refreshTokenAndRetry = (req) => {
  const { auth } = store.getState()

  return axios
    .post(`${baseURL}${REFRESH_TOKEN_URL}`, { token: auth.refreshToken })
    .then((res) => {
      const token = res.data.token
      store.dispatch({ type: AUTH_ACTION_SET_TOKEN, token, refreshToken: auth.refreshToken })
      req.headers.authorization = `Bearer ${token}`
      return httpInstance.request(req)
    })
    .catch((err) => {
      const { response } = error
      if (!isServerFault(response)) {
        store.dispatch({ type: AUTH_ACTION_EXPIRED })
      }

      return handleResponse(err?.response)
    })
}

httpInstance.interceptors.response.use(
  (response) => handleResponse(response),
  (error) => {
    const { response, config, message } = error

    if (isAccessTokenExpired(error.response) && !config._retry) {
      config._retry = true
      return refreshTokenAndRetry(config)
    }

    // TODO: HANDLE ERROR WITH UNDEFINED RESPONSE ( CLIENT ERROR MESSAGE )
    if (message) Toast.show({ text: message, type: 'danger' })

    return handleResponse(response)
  },
)

export default httpInstance
