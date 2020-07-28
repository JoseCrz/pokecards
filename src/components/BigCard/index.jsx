import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { Context } from '../../Context'

import { Card, ThumbImg, LoadedImage, H2, Top, Bottom, DataIcon } from './styles'

export const BigCard = () => {
  const { bigPicture, thumbPicture, bigPictureLoaded, setBigPictureLoaded, detailId } = useContext(Context)

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
      <Bottom>
        <Link to={`card/${detailId}`}>
          <DataIcon />
        </Link>
      </Bottom>
    </Card>
  )
}
