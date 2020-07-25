import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

export const Details = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
  text-align: center;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: none;
`

export const Div = styled.div`
  width: 180px;
  overflow: hidden;
 
  border-radius: var(--border);
  background: var(--element);
  box-shadow: var(--shadow);
  position: relative;
  margin: 0 10px;
  &:hover ${Details} {
    display: flex;
  }
`

export const Figure = styled.figure`
  margin: 0;
  border: 0;
  padding: 1px;
  display: flex;
  justify-content: center;
`

export const Img = styled.img`
  width: 100%;
  height: auto;
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: var(--text);
  display: flex;
  align-items: center;
  &::after {
    content: '→';
    margin-left: 5px;
  }
`
