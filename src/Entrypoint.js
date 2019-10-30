/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import Navigator from './navigation'
import configureStore from './config/store'
import { Root } from 'native-base'
const { persistor, store } = configureStore()

export default class Entrypoint extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      </Root>
    )
  }
}
