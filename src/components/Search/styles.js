import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Container = styled.div`
  z-index: 100;
`

export const H2 = styled.h2`
  margin: 20px 0;
  ${phone} {
    font-size: 18px;
    text-align: center;
  }
`

export const Arranger = styled.div`
  display: flex;
  align-items: center;
`
