import React, { Suspense, lazy } from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyle'
import { useFixNavbarBug } from './hooks/useFixNavbarBug'
import { Loader } from './components/Loader'

const Home = lazy(() => import('./pages/Home'))
const Sets = lazy(() => import('./pages/Sets'))
const SetDetail = lazy(() => import('./pages/SetDetail'))
const Favorites = lazy(() => import('./pages/Favorites'))
const Settings = lazy(() => import('./pages/Settings'))

export const App = () => {
  useFixNavbarBug()

  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Sets path='/sets' />
        <SetDetail path='/sets/:setCode' />
        <Settings path='/settings' />
        <Favorites path='/favs' />
      </Router>
    </Suspense>
  )
}
