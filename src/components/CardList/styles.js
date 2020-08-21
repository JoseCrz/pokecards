import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 180px);
  grid-auto-rows: 251px;
  gap: 30px;
  padding: 20px 25px;
  justify-content: center;

  ${phone} {
    grid-template-columns: repeat(auto-fit, 160px);
    grid-auto-rows: 222px;
    gap: 15px;
    padding: 10px 0px;
  }
`

export const H3 = styled.h3`
  text-align: center;
`
