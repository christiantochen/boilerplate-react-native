/**
 * @format
 */

global._ = require('lodash')

import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import Entrypoint from './src/Entrypoint'

AppRegistry.registerComponent(appName, () => Entrypoint)
