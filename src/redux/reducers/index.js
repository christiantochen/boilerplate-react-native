import * as auth from './authReducer'
import * as location from './locationReducer'
import * as network from './networkReducer'
import * as loading from './loadingReducer'

export default Object.assign(loading, location, network, auth)
