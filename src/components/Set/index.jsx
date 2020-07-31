import React from 'react'
import { Link } from '@reach/router'

import { Container, Img } from './styles'

export const Set = ({ set }) => {
  const { code, logoUrl } = set

  return (
    <Link to={`/sets/${code}`}>
      <Container>
        <Img src={logoUrl} alt='' />
      </Container>
    </Link>
  )
}
