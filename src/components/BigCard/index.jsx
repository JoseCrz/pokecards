import React from 'react'

import { Card, Figure, Img } from './styles'

const testUrl = 'https://images.pokemontcg.io/xy7/4_hires.png'

export const BigCard = () => {
  return (
    <Card>
      <Figure>
        <Img src={testUrl} />
      </Figure>
    </Card>
  )
}
