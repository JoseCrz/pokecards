import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Button, IconFavs, IconFavsFull, DeleteFav } from './styles'

export const FavButton = ({ onClick, isFav, cardId }) => {
  const { favs } = useContext(Context)

  if (isFav) {
    return (
      <Button onClick={onClick}>
        <DeleteFav />
      </Button>
    )
  }

  return (
    <Button onClick={onClick}>
      {
        favs.map(fav => fav.id).includes(cardId) ? <IconFavsFull /> : <IconFavs />
      }
    </Button>
  )
}
