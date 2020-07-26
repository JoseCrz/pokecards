import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr;
  overflow: scroll;
  padding: 0 10px;
`
export const Column = styled.div`
  padding: 15px 0;
  max-height: 100%;
  overflow: scroll;
`
