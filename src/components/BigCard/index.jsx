import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { Context } from '../../Context'

import { ActionButton } from '../ActionButton'

import { Card, ThumbImg, LoadedImage, H2, Top, Bottom, DataIcon } from './styles'

export const BigCard = () => {
  const { currentCard, bigPictureLoaded, setBigPictureLoaded } = useContext(Context)

  const handleOnLoad = () => {
    setBigPictureLoaded(true)
  }

  return (
    <Card>
      <Top>
        {
          currentCard ? (
            <>
              <ThumbImg src={currentCard.imageUrl} isLoaded={bigPictureLoaded} />
              <LoadedImage onLoad={handleOnLoad} src={currentCard.imageUrlHiRes} isLoaded={bigPictureLoaded} />
            </>
          ) : <H2>Select an image</H2>
        }
      </Top>
      <Bottom>
        {
          currentCard ? (
            <>
              {currentCard.evolvesFrom ? <ActionButton label='Evolves from' item={currentCard.evolvesFrom} /> : null}
              <ActionButton label='Series' item={currentCard.series} />
              <ActionButton label='Set' item={currentCard.set} />
            </>
          ) : null
        }
      </Bottom>
    </Card>
  )
}
