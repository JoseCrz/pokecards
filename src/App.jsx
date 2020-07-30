import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Sets } from './pages/Sets'
import { SetDetail } from './pages/SetDetail'

import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Sets path='/sets' />
        <SetDetail path='/sets/:setCode' />
      </Router>
    </>
  )
}
