import React from 'react'

import { Card } from '../Card'

import { Container } from './styles'
export const CardList = ({ cards = [] }) => {
  return (
    <Container>
      {
        cards.map(card => <Card key={card.id} card={card} />)
      }
    </Container>
  )
}
