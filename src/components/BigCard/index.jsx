import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import { Loader } from '../Loader'

import { Card, Figure, ThumbImg, LoadedImage, H2 } from './styles'

export const BigCard = () => {
  const { bigPicture, thumbPicture, bigPictureLoaded, setBigPictureLoaded } = useContext(Context)

  console.log('BigCard -> bigPictureLoading', bigPictureLoaded)

  const handleOnLoad = () => {
    console.log('finished loading')
    setBigPictureLoaded(true)
  }
  return (
    <Card>
      <ThumbImg src={thumbPicture} isLoaded={bigPictureLoaded} />
      <LoadedImage onLoad={handleOnLoad} src={bigPicture} isLoaded={bigPictureLoaded} />
    </Card>
  )
}
