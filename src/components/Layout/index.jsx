import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar } from '../Navbar'

import { Arranger, Main } from './styles'

export const Layout = ({ children, title, header }) => {
  return (
    <>
      <Helmet>
        <title>Pokémon | {title}</title>
        <link href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' rel='stylesheet' />
      </Helmet>
      <Arranger>
        <Navbar />
        <Main>
          {
            children
          }
        </Main>
      </Arranger>
    </>
  )
}
