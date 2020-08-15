import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: 150px;
  gap: 15px;
  padding: 15px;

  ${phone} {
    grid-template-columns: 1fr  1fr;
  }
`
