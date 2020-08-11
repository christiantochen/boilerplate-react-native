/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import { Root } from 'native-base'
import React from 'react'
import { useDispatch } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import Loading from './components/loading'
import Splash from './components/splash'
import Navigator from './navigation'
import { persistor } from './redux'
import { INITIALIZE_ACTION_SET_START } from './redux/actions'

export default function Gate() {
  const dispatch = useDispatch()

  function onBeforeLift() {
    dispatch({ type: INITIALIZE_ACTION_SET_START })
  }

  return (
    <PersistGate loading={<Splash />} onBeforeLift={onBeforeLift} persistor={persistor}>
      <Navigator />
      <Loading />
    </PersistGate>
  )
}
