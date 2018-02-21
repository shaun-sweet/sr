// @flow
// const uuidv1 = require('uuid/v1')
import type { ExtractReturn } from '@config/types/reduxTyper'
type Account = {
  id: string,
  nickname: string,
  balance: number
}
type State = {
  accounts: {
    budgetAccounts: string[],
    allAccounts: {
      [account_id: string]: Account
    }
  }
}

const initialState = {
  accounts: {
    budgetAccounts: [],
    allAccounts: {}
  }
}
const ADD_NEW_ACCOUNT = 'sr/Accounts/ADD_NEW_ACCOUNT'
const addNewAccount = (account: Account) => ({ type: ADD_NEW_ACCOUNT, payload: account })
type Action = ExtractReturn<typeof addNewAccount>

// export const saveAccountToDropbox = () => (dispatch, getState) => {
//   dispatch()
// }

export default function reducer (state: State = initialState, action: Action): State {
  switch (action.type) {
    case ADD_NEW_ACCOUNT:
      const { accounts: { budgetAccounts, allAccounts } } = state
      const account = action.payload
      return {
        accounts: {
          budgetAccounts: [...budgetAccounts, account.id],
          allAccounts: { ...allAccounts, [account.id]: account }
        }
      }
    default: return state
  }
}

