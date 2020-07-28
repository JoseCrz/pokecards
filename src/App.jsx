import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'

import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path='/' />
      </Router>
    </>
  )
}
