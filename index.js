/**
 * @format
 */

global._ = require('lodash')

import { AppRegistry } from 'react-native'
import Entrypoint from './src/Entrypoint'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => Entrypoint)
