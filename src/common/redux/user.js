const AUTHENTICATE_USER = 'sr/user/AUTHENTICATE'

export const logUserIn = (user) => ({
  type: AUTHENTICATE_USER,
  payload: user
})

export default function reducer (state = initialState(), action = {}) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action.payload
    default: return state
  }
}

function initialState () {
  return {
    user: {}
  }
}
