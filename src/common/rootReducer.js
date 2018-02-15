import { user } from '@features/common/redux'
import dropbox from '@features/Dropbox/redux'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
const reducerMap = {
  router: routerReducer,
  user,
  dropbox
}

export default combineReducers(reducerMap)
