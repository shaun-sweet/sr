import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import { Layout } from 'antd'

const { object } = PropTypes

const { Sider } = Layout
const StyledSider = styled(Sider)`
  background: red !important;
`

const SidePanel = ({children}) => {
  return (
    <StyledSider width={200}>
      {children}
    </StyledSider>
  )
}

SidePanel.propTypes = {
  children: object.isRequired
}

export default SidePanel
