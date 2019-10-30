import Api from 'app/api'
import ApiConstants from '../ApiConstants'

export default function getChecklist(params, token) {
  return Api(ApiConstants.GET_CHECKLIST, params, 'get', token)
}
