import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 150px 1fr;
  grid-template-areas: 'banner banner'
                       'cardList bigCard';
  overflow: scroll;
  
  ${phone} {
    grid-template-columns: 1fr;
    grid-template-rows: 130px 1fr;
    grid-template-areas: 'banner'
                        'cardList';
  }
`

export const BannerContainer = styled.div`
  grid-area: banner;
`

export const CardListContainer = styled.div`
  grid-area: cardList;
  max-height: 100%;
  overflow: scroll;
`

export const BigCardContainer = styled.div`
  grid-area: bigCard;
  width: 100%;
  display: grid;
  align-items: center;
  ${phone} {
    display: none;
  }
`
