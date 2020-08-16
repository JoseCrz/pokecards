import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Banner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextContainer = styled.div`
  display: flex;
  
  ${phone} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
`

export const P = styled.p`
  margin-right: 10px;
  color: darkgray;
  
  ${phone} {
    text-align: center;
  }
`

export const Img = styled.img`
  max-height: 60%;
  
  ${phone} {
    padding-top: 20px;
    max-height: 80px;
    max-width: 60%;
  }
`
