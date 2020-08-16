import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 150px 1fr;
  grid-template-areas: 'cards search'
                       'cards card';
  overflow: scroll;

  ${phone} {
    grid-template-columns: 1fr;
    grid-template-areas: 'search'
                         'cards';
  }
`

export const SearchContainer = styled.div`
  grid-area: search;
`

export const CardsContainer = styled.div`
  grid-area: cards;
  max-height: 100%;
  overflow: scroll;
`

export const CardContainer = styled.div`
  grid-area: card;
  width: 100%;
  display: grid;
  align-items: center;

  ${phone} {
    display: none;
  }
`
