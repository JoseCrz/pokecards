import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '../Card'

import { Container, H3 } from './styles'
export const CardList = ({ cards = [] }) => {
  return (
    <Container>
      {
        cards.length > 0
          ? cards.map(card => <Card key={card.id} card={card} />)
          : <H3>We couldn't find that...</H3>
      }
    </Container>
  )
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired
}
