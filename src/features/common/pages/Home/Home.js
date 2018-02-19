import React from 'react'
// import propTypes from 'prop-types'
import CompStyles from './styles'
import SideBar from '@components/SideBar'
import MainViewOutlet from '@components/MainViewOutlet'

const Home = () => {
  return (
    <CompStyles className='home'>
      <SideBar />
      <MainViewOutlet />
    </CompStyles>
  )
}

// Home.propTypes = {}
Home.displayName = 'Home'

export default Home
