const SAVE_DBX_ACCOUNT = 'sr/dropbox/SAVE_DBX_ACCOUNT'

export const saveDbxAccount = (dbxAccnt) => ({
  type: SAVE_DBX_ACCOUNT,
  dbxAccnt
})

export default function reducer (state = initialState(), action = {}) {
  switch (action.type) {
    case SAVE_DBX_ACCOUNT:
      return action.dbxAccnt
    default: return state
  }
}

function initialState () {
  return {

  }
}
