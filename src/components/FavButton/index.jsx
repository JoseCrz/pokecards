import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Button, IconFavs, IconFavsFull } from './styles'

export const FavButton = ({ onClick, cardId }) => {
  const { favs } = useContext(Context)

  return (
    <Button onClick={onClick}>
      {
        favs.map(fav => fav.id).includes(cardId) ? <IconFavsFull /> : <IconFavs />
      }
    </Button>
  )
}
