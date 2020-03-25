/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react'
import { ActivityIndicator, StatusBar } from 'react-native'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { Root } from 'native-base'
import { ThemeProvider } from 'styled-components'
import Navigator from './navigation'
import { persistor, store } from './redux'
import theme from './fixtures/theme'

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
