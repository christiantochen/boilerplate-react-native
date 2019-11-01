import Api from 'app/api'
import ApiConstants from '../ApiConstants'

export default function getEffectiveOperationalPlanPerPit(pitId, params, token) {
  return Api(ApiConstants.GET_OPERATIONAL_PLAN.replace(':id', pitId), params, 'get', token)
}
