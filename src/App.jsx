import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Sets } from './pages/Sets'
import { SetDetail } from './pages/SetDetail'
import { Favorites } from './pages/Favorites'
import { Settings } from './pages/Settings'

import { GlobalStyle } from './styles/GlobalStyle'

import { useFixNavbarBug } from './hooks/useFixNavbarBug'

export const App = () => {
  useFixNavbarBug()

  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Sets path='/sets' />
        <SetDetail path='/sets/:setCode' />
        <Settings path='/settings' />
        <Favorites path='/favs' />
      </Router>
    </>
  )
}
