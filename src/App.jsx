import React from 'react'

import { GlobalStyle } from './styles/GlobalStyle'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout title='Home'>
        <h1>Hello there!</h1>
      </Layout>
    </>
  )
}
