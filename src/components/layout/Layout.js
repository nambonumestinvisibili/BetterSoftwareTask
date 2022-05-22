import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../style/colors'

const Wrapper = styled.div`
  padding: 80px 100px;
  background-color: ${COLORS.black};
  height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}

export default Layout