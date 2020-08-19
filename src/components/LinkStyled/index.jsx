import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink } from './styles'

export const LinkStyled = ({ to, onClick, children }) => {
  return onClick
    ? <StyledLink to={to} onClick={onClick}>{children}</StyledLink>
    : <StyledLink to={to}>{children}</StyledLink>
}

LinkStyled.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
