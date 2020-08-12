/**
 * @format
 */

global._ = require('lodash')

import { AppRegistry } from 'react-native'

import Entrypoint from './src/Entrypoint'

AppRegistry.registerComponent('ReactNativeBoilerPlate', () => Entrypoint)
