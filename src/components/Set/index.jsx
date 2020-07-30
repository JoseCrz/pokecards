import React from 'react'
import { Link } from '@reach/router'

import { Container, Img } from './styles'

export const Set = ({ code, logoUrl }) => {
  return (
    <Link to={`/sets/${code}`}>
      <Container>
        <Img src={logoUrl} alt='' />
      </Container>
    </Link>
  )
}
