import React from 'react'

import { Button, IconFavs } from './styles'

export const FavButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <IconFavs />
    </Button>
  )
}
