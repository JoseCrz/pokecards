import { css, keyframes } from 'styled-components'

const spinKeyframes = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`

export const spin = ({ time = '1s', type = 'linear' }) => (
  css`animation: ${time} ${spinKeyframes} ${type} infinite`
)
