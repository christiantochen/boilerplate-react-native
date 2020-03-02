import axios from 'axios'
import querystring from './querystring'

const httpInstance = axios.create()

export const get = (url, params, headers) => {
  return httpInstance.get(`${url}${querystring(params)}`, { headers })
}
