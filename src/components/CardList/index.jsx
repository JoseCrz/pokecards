import React from 'react'
import PropTypes from 'prop-types'

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

CardList.propTypes = {
  cards: PropTypes.array.isRequired
}
