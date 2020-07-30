import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Container = styled.div`
  background: var(--primary--light);
  padding: 20px;
  border-radius: var(--border);
  z-index: 100;
`

export const H2 = styled.h2`
  margin: 12px 0;
`

export const RadioContainer = styled.div`

`

export const Arranger = styled.div`
  display: flex;
  align-items: center;
`

export const Link = styled(LinkRouter)`
  background: transparent;
  border-radius: var(--border);
  border: 1px solid var(--primary);
  padding: 5px 10px;
  color: var(--primary);
  transition: cubic-bezier(0.215, 0.610, 0.355, 1) .2s;
  text-decoration: none;
  margin: 0px 10px;
  
  &:hover {
    background: var(--primary);
    color: var(--text-white);
  }

`
