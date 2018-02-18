import React from 'react'
import { DBoxLandingPage, SuccessCallback } from '@features/Dropbox/pages'
import {
  Route
} from 'react-router-dom'
import AppWrapper from '@components/AppWrapper'
// const DBoxLandingPage = () => require('@features/Dropbox/pages/LandingPage.js')

const AppLayout = () => {
  return (
    <AppWrapper className='root'>
      <div className='sticky-footer'>
        <header>
          <nav />
        </header>
        <main>
          <h1 className='title'>its working YAY!</h1>
          <Route exact path='/' component={DBoxLandingPage} />
          <Route path='/auth' component={SuccessCallback} />
        </main>
      </div>
      <footer>
        This is a footer
      </footer>
    </AppWrapper>
  )
}

export default AppLayout
