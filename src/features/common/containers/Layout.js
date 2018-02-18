import React from 'react'
import { DBoxLandingPage, SuccessCallback } from '@features/Dropbox/pages'
import {
  Route,
  Link
} from 'react-router-dom'
import { Btn } from '@components/Buttons'
import AppWrapper from '@components/AppWrapper'
// const DBoxLandingPage = () => require('@features/Dropbox/pages/LandingPage.js')

const AppLayout = () => {
  return (
    <AppWrapper className='root'>
      <div className='sticky-footer'>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/login-success'><Btn>IDK</Btn></Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <h1 className='title'>its working YAY! fds</h1>
          <Route exact path='/' component={DBoxLandingPage} />
          <Route path='/login-success' component={SuccessCallback} />
        </main>
      </div>
      <footer>
        This is a footer
      </footer>
    </AppWrapper>
  )
}

export default AppLayout
