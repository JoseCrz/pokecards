import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Link } from '@reach/router'

import { Container, Img } from './styles'

export const Set = ({ set }) => {
  const { setCurrentSet } = useContext(Context)
  const { code, logoUrl } = set

  const handleOnClick = () => {
    setCurrentSet(set)
  }

  return (
    <Link to={`/sets/${code}`}>
      <Container onClick={handleOnClick}>
        <Img src={logoUrl} alt='' />
      </Container>
    </Link>
  )
}
