import React, { useEffect } from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Sets } from './pages/Sets'
import { SetDetail } from './pages/SetDetail'
import { Favorites } from './pages/Favorites'
import { Settings } from './pages/Settings'

import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  // * THIS HOLY CODE IS TO FIX THE MOBILE NAVBAR 100VH BUG
  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }, [])
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
