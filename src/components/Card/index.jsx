import React from 'react'

import { Div, Img, Figure, Details, Link } from './styles'

export const Card = ({ id, name, nationalPokedexNumber, imageUrl, types }) => {
  return (
    <Div>
      <Figure>
        <Img src={imageUrl} alt='' />
      </Figure>
      {/* <Details>
        <Link to='/'>View Details</Link>
      </Details> */}
    </Div>
  )
}
