import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const SetListContainer = styled.div`
  max-height: 100%;
  overflow: scroll;

  ${phone} {
    width: 100vw;
    padding: 0 15px;
  }
`
