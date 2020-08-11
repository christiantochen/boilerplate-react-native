import * as auth from './authReducer'
import * as common from './commonReducer'
import * as location from './locationReducer'
import * as network from './networkReducer'

export default Object.assign(common, location, network, auth)
