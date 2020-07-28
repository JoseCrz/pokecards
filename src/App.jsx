import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Detail path='/card/:detailId' />
      </Router>
    </>
  )
}
