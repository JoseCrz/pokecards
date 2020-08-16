import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Nav = styled.nav`
  background: var(--primary);
  color: var(--text-white);

  ${phone} {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    height: 60px;
  }
`

export const Ul = styled.ul`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 8fr;
  justify-items: center;
  padding: 20px 0;

  ${phone} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    padding: 0 20px 0 0;
  }
`

export const Li = styled.li`
  align-self: ${({ last }) => last ? 'end' : 'center'};
  
  ${phone} {
    align-self: center;
    margin: 0;
    padding: 0;
  }
`
