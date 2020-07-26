import React, { useContext } from 'react'
import { Context } from '../../Context'

import { Div, Img, Figure } from './styles'

export const Card = ({ id, imageUrl, imageUrlHiRes }) => {
  const { setBigPicture } = useContext(Context)

  const handleOnClick = () => {
    setBigPicture(imageUrlHiRes)
  }

  return (
    <Div onClick={handleOnClick}>
      <Figure>
        <Img src={imageUrl} alt='' />
      </Figure>
      {/* <Details>
        <Link to='/'>View Details</Link>
      </Details> */}
    </Div>
  )
}
