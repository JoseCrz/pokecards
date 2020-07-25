import React from 'react'
import { Helmet } from 'react-helmet'
import { Arranger } from './styles'

export const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>Home | {title}</title>
        <link href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' rel='stylesheet' />
      </Helmet>
      <Arranger>
        <div />
        <main>
          {children}
        </main>
      </Arranger>
    </>
  )
}
