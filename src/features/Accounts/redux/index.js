import { combineReducers } from 'redux'
import accountReducer from './bootstrapApp'

const reducers = {
  accounts: accountReducer
}

export default combineReducers(reducers)
