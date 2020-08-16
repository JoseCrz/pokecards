import React from 'react'

import { StyledLink } from './styles'

export const LinkStyled = ({ to, onClick, children }) => {
  return onClick
    ? <StyledLink to={to} onClick={onClick}>{children}</StyledLink>
    : <StyledLink to={to}>{children}</StyledLink>
}
