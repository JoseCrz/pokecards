import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Container = styled.div`
  z-index: 100;
`

export const H2 = styled.h2`
  margin: 20px 0;
  
  ${phone} {
    margin: 10px 0;
    font-size: 16px;
    text-align: center;
  }
`

export const Arranger = styled.div`
  display: flex;
  align-items: center;
  ${phone} {
    justify-content: center;
    padding-bottom: 8px;
  }
`
