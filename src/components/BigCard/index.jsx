import React, { useContext } from 'react'
import { Context } from '../../Context'

import { Card, Figure, Img, H2 } from './styles'

export const BigCard = () => {
  const { bigPicture } = useContext(Context)

  return (
    <Card>
      {
        bigPicture
          ? (
            <Figure>
              <Img src={bigPicture} />
            </Figure>
          )
          : <H2>Select a card</H2>
      }
    </Card>
  )
}
