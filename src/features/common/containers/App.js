import React, { Component } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { DBoxLandingPage, SuccessCallback } from '@features/Dropbox/pages'
import storeConfig from '@common/configStore'
import { Btn } from '@components/Buttons'
import { ConnectedRouter } from 'react-router-redux'
import history from '@common/history'

const store = storeConfig()
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>its working YAY! fds</h1>
          </header>
          <ConnectedRouter history={history}>
            <div className='content'>
              <nav>
                <ul>
                  <li><a onClick={() => console.log('hi')}>Home</a></li>
                  <li><Link to='/login-success'><Btn>IDK</Btn></Link></li>
                </ul>
              </nav>
              <main>
                <Route exact path='/' component={DBoxLandingPage} />
                <Route path='/login-success' component={SuccessCallback} />
              </main>
            </div>
          </ConnectedRouter>
        </div>
      </Provider>
    )
  }
}

export default App
