import React from 'react'
import { Link } from '@reach/router'

import { useNearScreen } from '../../hooks/useNearScreen'

import { Container, Img } from './styles'

export const Set = ({ set }) => {
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
