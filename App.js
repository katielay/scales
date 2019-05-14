import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Scales from './components/Scales'
import scalesReducer from './reducer'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, scalesReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(logger)
)

persistStore(store)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Scales />
      </Provider>
    );
  }
}
