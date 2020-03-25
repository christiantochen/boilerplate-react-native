import * as auth from './authReducer'
import * as loading from './loadingReducer'
import * as location from './locationReducer'
import * as network from './networkReducer'

export default Object.assign(loading, location, network, auth)
