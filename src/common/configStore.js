import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import history from './history'
import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// eslint-disable-next-line
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
// Now you can dispatch navigation actions from anywhere!

const enhancers = []
const middlewares = [
  ReduxThunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const persistConfig = {
  key: 'dropbox',
  whitelist: ['dropbox'],
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore (initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  )
  const persistor = persistStore(store)

  /* istanbul ignore if  */
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer'); // eslint-disable-line
      store.replaceReducer(nextRootReducer)
    })
  }
  return { store, persistor }
}
