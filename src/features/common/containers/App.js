import React, { Component } from 'react'
import { Provider } from 'react-redux'
import storeConfig from '@common/configStore'
import { ConnectedRouter } from 'react-router-redux'
import history from '@common/history'
import Layout from './Layout'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = storeConfig()
class App extends Component {
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
