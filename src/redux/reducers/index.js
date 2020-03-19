import * as auth from './authReducer'
import * as self from './selfReducer'
import * as location from './locationReducer'
import * as network from './networkReducer'
import * as loading from './loadingReducer'
import * as shift from './shiftReducer'

export default Object.assign(loading, location, network, auth, self, shift)
