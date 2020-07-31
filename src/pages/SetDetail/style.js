import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 150px 1fr;
  grid-template-areas: 'banner banner'
                       'cardList bigCard';
`

export const BannerContainer = styled.div`
  grid-area: banner;
`

export const CardListContainer = styled.div`
  grid-area: cardList;
`

export const BigCardContainer = styled.div`
  grid-area: bigCard;
`
