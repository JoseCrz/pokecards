import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { Context } from '../../Context'

import { Navbar } from '../Navbar'
import { BigCardModal } from '../BigCardModal'

import { Arranger, Main } from './styles'

export const Layout = ({ children, title }) => {
  const { isModalOpen } = useContext(Context)

  return (
    <>
      <Helmet>
        <title>Pokécards | {title}</title>
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
      <BigCardModal isOpen={isModalOpen} />
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired
}
