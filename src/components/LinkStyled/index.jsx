import React from 'react'

import { StyledLink } from './styles'

export const LinkStyled = ({ to, children }) => {
  return (
    <StyledLink to={to}>{children}</StyledLink>
  )
}
