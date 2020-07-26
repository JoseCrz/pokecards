import React, { useContext } from 'react'
import { Context } from '../../Context'

import { Card, Figure, Img } from './styles'

const testUrl = 'https://images.pokemontcg.io/xy7/4_hires.png'

export const BigCard = () => {
  const { bigPicture } = useContext(Context)

  return (
    <Card>
      <Figure>
        <Img src={bigPicture} />
      </Figure>
    </Card>
  )
}
