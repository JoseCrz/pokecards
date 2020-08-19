import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { useNearScreen } from '../../hooks/useNearScreen'

import { Container, Img } from './styles'

export const CardSet = ({ set }) => {
  const { code, logoUrl } = set
  const [show, element] = useNearScreen()

  return (
    <Link to={`/sets/${code}`}>
      <Container ref={element}>
        {
          show && <Img src={logoUrl} alt='' />
        }
      </Container>
    </Link>
  )
}

Set.propTypes = {
  set: PropTypes.object.isRequired
}
