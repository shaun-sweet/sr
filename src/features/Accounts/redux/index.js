import { combineReducers } from 'redux'
import accountReducer from './addAccount'

const reducers = {
  accounts: accountReducer
}

export default combineReducers(reducers)
