import React from 'react'

import { Set } from '../Set'

import { Container } from './styles'
export const SetList = ({ sets = [] }) => {
  return (
    <Container>
      {
        sets.map(set => <Set key={set.code} set={set} />)
      }
    </Container>
  )
}
