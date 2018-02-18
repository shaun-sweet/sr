const uuidv1 = require('uuid/v1')

const ADD_NEW_ACCOUNT = 'sr/Accounts/ADD_NEW_ACCOUNT'

export default function reducer (state = initialState(), action = {}) {
  switch (action.type) {
    case ADD_NEW_ACCOUNT:
      return {}
    default: return state
  }
}

function initialState () {
  return {

  }
}

export const addNewAccount = () => (dispatch, getState) => {

}
