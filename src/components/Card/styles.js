import styled from 'styled-components'
import { fadeIn } from '../../styles/Animations'

export const Details = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
  text-align: center;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: 0;
  transition: cubic-bezier(0.215, 0.610, 0.355, 1) .3s;
`

export const Container = styled.div`
  width: 180px;
  height: 251px;
  overflow: hidden;
  border-radius: var(--border);
  background: var(--element);
  box-shadow: var(--shadow);
  position: relative;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow--big);
    transform: scale(1.1);
    z-index: 99;
  }

  &:hover button {
    opacity: 1;
  }
`

export const Figure = styled.figure`
  margin: 0;
  border: 0;
  display: flex;
  justify-content: center;
`

export const Img = styled.img`
  ${fadeIn({ time: '2.5s' })}
  width: 100%;
  height: 100%;
  transition: opacity 400ms ease 0ms;
  opacity: ${props => props.loading ? 0 : 1};
`
