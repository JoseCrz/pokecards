import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledLink = styled(Link)`
  background: transparent;
  border-radius: var(--border);
  border: 1px solid var(--accent);
  padding: 5px 10px;
  color: var(--accent);
  transition: cubic-bezier(0.215, 0.610, 0.355, 1) .2s;
  text-decoration: none;
  margin: 0px 10px;
  
  &:hover {
    background: var(--accent);
    color: var(--text-white);
  }
  
`
