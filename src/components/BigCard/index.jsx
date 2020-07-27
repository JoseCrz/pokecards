import React, { useContext } from 'react'
import { Context } from '../../Context'

import { Card, Figure, ThumbImg, LoadedImage, H2, Top, Bottom } from './styles'

export const BigCard = () => {
  const { bigPicture, thumbPicture, bigPictureLoaded, setBigPictureLoaded } = useContext(Context)

  const handleOnLoad = () => {
    setBigPictureLoaded(true)
  }

  return (
    <Card>
      <Top>
        {
          bigPicture ? (
            <>
              <ThumbImg src={thumbPicture} isLoaded={bigPictureLoaded} />
              <LoadedImage onLoad={handleOnLoad} src={bigPicture} isLoaded={bigPictureLoaded} />
            </>
          ) : <H2>Select an image</H2>
        }
      </Top>
      <Bottom />
    </Card>
  )
}
