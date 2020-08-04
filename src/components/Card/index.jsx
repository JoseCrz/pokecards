import React, { useState, useContext } from 'react'
import { Context } from '../../Context'

import { FavButton } from '../FavButton'

import { useNearScreen } from '../../hooks/useNearScreen'
import { addFav } from '../../utils/favUtils'

import { Container, Img, Figure } from './styles'

export const Card = ({ card }) => {
  const [loading, setLoading] = useState(true)
  const { currentCard, setCurrentCard, setBigPictureLoaded } = useContext(Context)
  const [show, element] = useNearScreen()

  const handleOnClick = () => {
    if (currentCard === null) {
      setBigPictureLoaded(false)
      setCurrentCard(card)
    } else {
      if (currentCard.id !== card.id) {
        setBigPictureLoaded(false)
        setCurrentCard(card)
      }
    }
  }

  const handleFav = () => addFav({ card })

  return (
    <Container onClick={handleOnClick} ref={element}>
      {
        show &&
          <>
            <FavButton onClick={handleFav} />
            <Figure>
              <Img loading={loading} src={card.imageUrl} onLoad={() => setLoading(false)} alt='' />
            </Figure>
          </>
      }
    </Container>
  )
}
