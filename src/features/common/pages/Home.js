import React from 'react'
import styled from 'styled-components'
import SideBar from '@features/common/containers/SideBar'
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
      <SideBar />
      <MainView />
    </Root>
  )
}

export default Home
