/**
 * @format
 */

global._ = require('lodash')

import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import { typography } from './src/default'
import Entrypoint from './src/Entrypoint'

typography()

AppRegistry.registerComponent(appName, () => Entrypoint)
