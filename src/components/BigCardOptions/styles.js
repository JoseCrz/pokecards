import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: ${({ isMinimized }) => isMinimized ? '-10%' : '0'};
  width: 100%;
  height: 10%;
  background: var(--element);
  border-radius: var(--border);
  box-shadow: var(--shadow);
  transition: cubic-bezier(0.215, 0.610, 0.355, 1) .2s;
  
`

export const InnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Button = styled.button`
  position: absolute;
  top: -30px;
  right: 5px;
  background: ${({ isMinimized }) => isMinimized ? 'rgba(255,255,255, .75)' : 'var(--element)'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow);
  font-size: 32px;
  padding: 0;
`
