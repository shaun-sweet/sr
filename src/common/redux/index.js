import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import ReduxThunk from 'redux-thunk'
// eslint-disable-next-line
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

// Store modules
import user from './user'
import dropbox from '@features/Dropbox/redux'

const reducers = {
  user,
  dropbox
}

export const history = createHistory()

const middleware = routerMiddleware(ReduxThunk, history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(middleware))
export const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  enhancer
)
