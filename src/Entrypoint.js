/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { Root } from 'native-base'
import Navigator from './navigation'
import { persistor, store } from './redux'

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
