import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const H1 = styled.h1`
  text-align: center;
`

export const Container = styled.div`
  max-height: 100%;
  width: 100vw;
  overflow: scroll;
`

export const PaletteListContainer = styled.div`

  ${phone} {
    width: 100vw;
  }
`
