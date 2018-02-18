import React from 'react'
import styled from 'styled-components'
import SideNav from '@features/common/containers/SideNav'
import MainView from '@components/MainView'

const Root = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`
const Home = () => {
  return (
    <Root className='home'>
      <SideNav />
      <MainView />
    </Root>
  )
}

export default Home
