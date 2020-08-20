import { css, keyframes } from 'styled-components'

const spinKeyframes = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`

const fadeInKeyframes = keyframes`
  from {
    filter: blur(6px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

const octocatWaveKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(-25deg);
  }

  40% {
    transform: rotate(10deg);
  }

  60% {
    transform: rotate(-25deg);
  }

  80% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

export const spin = ({ time = '1s', type = 'linear' }) => (
  css`animation: ${time} ${spinKeyframes} ${type} infinite;`
)

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => (
  css`animation: ${time} ${fadeInKeyframes} ${type};`
)

export const octocatWave = () => (
  css`animation: 560ms ${octocatWaveKeyframe} ease-in-out;`
)
