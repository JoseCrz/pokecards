import styled from 'styled-components'
import { octocatWave } from '../../styles/Animations'
import { phone } from '../../styles/MediaQueries'

export const Svg = styled.svg`
  width: 70px;
  height: 70px;
  fill: var(--icon);

  ${phone} {
    width: 55px;
    height: 55px;
  }
`

export const OctoArm = styled.path`
  transform-origin: 130px 106px; 
`
export const OctoBody = styled.path``

export const Background = styled.path`
  fill: var(--primary);
`
export const A = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  
  &:hover ${OctoArm} {
    ${octocatWave()}
  }

  ${phone} {
    &:hover ${OctoArm} {
      animation: none;
    }
  }
`
