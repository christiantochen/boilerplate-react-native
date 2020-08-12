import { Root } from 'native-base'
import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import theme from './fixtures/theme'
import Gate from './Gate'
import { store } from './redux'

export default function EntryPoint() {
  return (
    <Root>
      <StatusBar backgroundColor={theme.color.accent} />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Gate />
        </ThemeProvider>
      </Provider>
    </Root>
  )
}
