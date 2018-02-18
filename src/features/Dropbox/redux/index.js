import { combineReducers } from 'redux'
import accountReducer from './bootstrapApp'

const reducers = {
  account: accountReducer
}

export default combineReducers(reducers)
