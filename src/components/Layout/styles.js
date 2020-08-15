import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Arranger = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 100vh;

  ${phone} {
    grid-template-columns: 1fr;
    grid-template-rows: 100vh;
  }
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px 20px 0 0;

  ${phone} {
    padding: 0;
  }
`
