// @flow
import React from 'react'
import { Provider } from 'react-redux'
import storeConfig from '@config/configStore'
import { ConnectedRouter } from 'react-router-redux'
import history from '@config/history'
import Layout from '@components/Layout'
import { PersistGate } from 'redux-persist/integration/react'
const { store, persistor } = storeConfig()

class App extends React.Component<{}> {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Layout />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
