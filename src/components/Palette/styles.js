import styled from 'styled-components'

export const Container = styled.div`
  background: var(--element);
  border-radius: var(--border);
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70% 30%;
  overflow: hidden;
  cursor: pointer;
`

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const P = styled.p`

`

export const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export const Color = styled.div`
  background: ${({ color }) => color};
`
