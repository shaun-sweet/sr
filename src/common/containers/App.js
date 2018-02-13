import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { DBoxLandingPage, SuccessCallback } from '@features/Dropbox/pages'
import { store, history } from '../redux'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Welcome to React</h1>
          </header>
          <Router history={history}>
            <div className='content'>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/login-success'>IDK</Link></li>
                </ul>
              </nav>
              <main>
                <Route exact path='/' component={DBoxLandingPage} />
                <Route path='/login-success' component={SuccessCallback} />
              </main>
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
