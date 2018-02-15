const SAVE_DBOX_ACCOUNT = 'sr/dropbox/SAVE_DBOX_ACCOUNT'

export const saveDboxAccount = (dboxAccnt) => ({
  type: SAVE_DBOX_ACCOUNT,
  dboxAccnt
})

export default function reducer (state = initialState(), action = {}) {
  switch (action.type) {
    case SAVE_DBOX_ACCOUNT:
      return action.dboxAccnt
    default: return state
  }
}

function initialState () {
  return {

  }
}
