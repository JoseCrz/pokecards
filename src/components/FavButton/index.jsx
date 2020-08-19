import React, { useContext } from 'react'
import PropTypes from 'prop-types'
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

FavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired
}
