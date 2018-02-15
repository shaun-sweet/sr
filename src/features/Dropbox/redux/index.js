import { combineReducers } from 'redux'
import accountReducer from './account'

const reducers = {
  account: accountReducer
}

export default combineReducers(reducers)
