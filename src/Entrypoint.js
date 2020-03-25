import { Root } from 'native-base'
/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react'
import { ActivityIndicator, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { ThemeProvider } from 'styled-components'

import theme from './fixtures/theme'
import Navigator from './navigation'
import { persistor, store } from './redux'

export default class Entrypoint extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Root>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
              <StatusBar backgroundColor={theme.color.accent} />
              <Navigator />
            </PersistGate>
          </Root>
        </ThemeProvider>
      </Provider>
    )
  }
}
