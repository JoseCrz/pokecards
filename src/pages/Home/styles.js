import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 150px 1fr;
  grid-template-areas: 'search card'
                       'cards card';
  overflow: scroll;
  padding: 0 10px;
`

export const SearchContainer = styled.div`
  grid-area: search;
  max-height: 100%;
`

export const CardContainer = styled.div`
  grid-area: card;
  max-height: 100%;
  padding: 15px 0;
`

export const CardsContainer = styled.div`
  grid-area: cards;
  max-height: 100%;
  overflow: scroll;
`
