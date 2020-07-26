import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar } from '../Navbar'

import { Arranger, H1, Main } from './styles'

export const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>Pokémon | {title}</title>
        <link href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' rel='stylesheet' />
      </Helmet>
      <Arranger>
        <Navbar />
        <Main>
          <header>
            <H1>{title}</H1>
          </header>
          {
            children
          }
        </Main>
      </Arranger>
    </>
  )
}
