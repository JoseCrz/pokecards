import React, { useContext } from 'react'
import { Context } from '../../Context'

import { Card, ThumbImg, LoadedImage, H2 } from './styles'

export const BigCard = () => {
  const { bigPicture, thumbPicture, bigPictureLoaded, setBigPictureLoaded } = useContext(Context)

  const handleOnLoad = () => {
    setBigPictureLoaded(true)
  }

  return (
    <Card>
      {
        bigPicture ? (
          <>
            <ThumbImg src={thumbPicture} isLoaded={bigPictureLoaded} />
            <LoadedImage onLoad={handleOnLoad} src={bigPicture} isLoaded={bigPictureLoaded} />
          </>
        ) : <H2>Select an image</H2>
      }
    </Card>
  )
}
