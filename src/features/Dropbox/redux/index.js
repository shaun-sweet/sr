import { combineReducers } from 'redux'
import accountReducer from './saveDbxAccount'

const reducers = {
  account: accountReducer
}

export default combineReducers(reducers)
