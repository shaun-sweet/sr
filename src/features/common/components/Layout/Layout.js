import React from 'react'
import { DBoxLandingPage, SuccessCallback } from '@features/Dropbox/pages'
import {
  Route
} from 'react-router-dom'
import CompStyles from './styles'
import Home from '@features/common/pages/Home'

const AppLayout = () => {
  return (
    <CompStyles className='root'>
      <div className='container'>
        <header>
          <nav />
        </header>
        <main>
          <Route exact path='/' component={DBoxLandingPage} />
          <Route path='/auth' component={SuccessCallback} />
          <Route path='/sr' component={Home} />
        </main>
      </div>
      <footer>
        This is a footer
      </footer>
    </CompStyles>
  )
}

export default AppLayout
