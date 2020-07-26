import styled from 'styled-components'

import { spin } from '../../styles/Animations'

export const SvgContainer = styled.div`
  ${spin({})}
`

export const Svg = styled.svg`
  width: 50px;
  height: 50px;
`
