import React, { useContext } from 'react'
import { Context } from '../../Context'

import { ActionButton } from '../ActionButton'

import { Card, ThumbImg, LoadedImage, H2, Top, Bottom } from './styles'

export const BigCard = () => {
  const { currentCard, bigPictureLoaded, setBigPictureLoaded } = useContext(Context)
  const { imageUrl, imageUrlHiRes, evolvesFrom, series, set } = currentCard

  const cardExists = Object.keys(currentCard).length > 0

  const handleOnLoad = () => {
    setBigPictureLoaded(true)
  }

  return (
    <Card>
      <Top>
        {
          cardExists ? (
            <>
              <ThumbImg src={imageUrl} isLoaded={bigPictureLoaded} />
              <LoadedImage onLoad={handleOnLoad} src={imageUrlHiRes} isLoaded={bigPictureLoaded} />
            </>
          ) : <H2>Select an image</H2>
        }
      </Top>
      <Bottom>
        {
          cardExists && (
            <>
              {evolvesFrom && <ActionButton label='Evolves from' item={evolvesFrom} />}
              <ActionButton label='Series' item={series} />
              <ActionButton label='Set' item={set} />
            </>
          )
        }
      </Bottom>
    </Card>
  )
}
