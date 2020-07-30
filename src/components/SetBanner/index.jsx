import React from 'react'

import { Banner } from './styles'

export const SetBanner = ({ logoUrl, series, totalCards, releaseDate }) => {
  return (
    <Banner>
      <img src={logoUrl} alt='' />
      <p>{`Series: ${series}`}</p>
      <p>{`Total Cards: ${totalCards}`}</p>
      <p>{`Release Date: ${releaseDate}`}</p>
    </Banner>
  )
}
