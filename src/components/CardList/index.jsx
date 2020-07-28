import React from 'react'

import { Card } from '../Card'

export const CardList = ({ cards = [] }) => {
  return (
    <ul>
      {
        cards.map(card => <li key={card.id}> <Card card={card} /> </li>)
      }
    </ul>
  )
}
