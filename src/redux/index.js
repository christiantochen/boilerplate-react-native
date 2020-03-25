import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { persistCombineReducers, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './reducers'
import sagas from './sagas'

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation', 'loading', 'network', 'location'],
  debug: true, //to get useful logging
}

const middleware = []
const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware)

if (__DEV__) {
  middleware.push(createLogger())
}

const reducers = persistCombineReducers(config, rootReducers)
const enhancers = [applyMiddleware(...middleware)]
const persistConfig = { enhancers }
const store = createStore(reducers, undefined, compose(...enhancers))
const persistor = persistStore(store, persistConfig)

sagaMiddleware.run(sagas)

export { persistor, store }
