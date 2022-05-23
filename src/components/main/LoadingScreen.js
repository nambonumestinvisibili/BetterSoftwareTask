import React from 'react'
import styledComponents from 'styled-components';
import logo from '../../logo.svg';

const Panel = styledComponents.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background-color: black;
  z-index: 9999;
  color: white;
  visibility: ${({ isLoading }) => isLoading ? 'visible' : 'hidden' }
`

const LoadingTitle = styledComponents.div`
  display: flex;
  justify-content: center;
`

const LoadingScreen = ({ isLoading }) => {
  return (
    <Panel isLoading={isLoading}>
      <img src={logo} className="App-logo" alt="logo" />
      <LoadingTitle>
        Loading...
      </LoadingTitle>
    </Panel>
  )
}

export default LoadingScreen