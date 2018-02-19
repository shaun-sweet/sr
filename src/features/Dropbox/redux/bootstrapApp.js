const SAVE_DBX_ACCOUNT = 'sr/dropbox/SAVE_DBX_ACCOUNT'

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

export const saveDbxAccount = (dbxAccnt) => ({
  type: SAVE_DBX_ACCOUNT,
  dbxAccnt
})

export const bootstrapApp = (urlParams) => (dispatch, getState) => {
  const accessToken = urlParams.get('access_token')
  const uid = urlParams.get('uid')
  const accountId = urlParams.get('account_id')
  const dbxAccount = {
    accessToken,
    uid,
    accountId
  }
  dispatch(saveDbxAccount(dbxAccount))
}
