import React from 'react'

import { CardSet } from '../CardSet'

import { Container } from './styles'
export const SetList = ({ sets = [] }) => {
  return (
    <Container>
      {
        sets.map(set => <CardSet key={set.code} set={set} />)
      }
    </Container>
  )
}
