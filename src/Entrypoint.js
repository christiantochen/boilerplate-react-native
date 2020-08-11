/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import { Root } from 'native-base'
import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { ThemeProvider } from 'styled-components'

import Loading from './components/loading'
import Splash from './components/splash'
import theme from './fixtures/theme'
import Navigator from './navigation'
import { persistor, store } from './redux'

export default function EntryPoint() {
  function onBeforeLift() {}

  return (
    <Root>
      <StatusBar backgroundColor={theme.color.accent} />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={<Splash />} onBeforeLift={onBeforeLift} persistor={persistor}>
            <Navigator />
            <Loading />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </Root>
  )
}
