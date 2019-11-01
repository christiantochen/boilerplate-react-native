import Api from 'app/api'
import ApiConstants from '../ApiConstants'

export default function getEffectiveExcavatorPerPit(pitId, params, token) {
  return Api(ApiConstants.GET_EXCAVATOR.replace(':id', pitId), params, 'get', token)
}
