import React from 'react'

import { Button, IconFavs, DeleteFav } from './styles'

export const FavButton = ({ onClick, isFav = false }) => {
  return (
    <Button onClick={onClick}>
      {
        isFav ? <DeleteFav /> : <IconFavs />
      }
    </Button>
  )
}
