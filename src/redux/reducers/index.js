import { locationReducer as location } from 'redux-saga-location'
import * as network from './networkReducer'
import * as loading from './loadingReducer'

export default Object.assign(loading, { location }, network)
