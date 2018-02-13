import { combineReducers } from 'redux'
import account from './account'

const reducers = {
  account
}

export default combineReducers({...reducers})
