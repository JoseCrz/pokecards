import React, { useContext } from 'react'
import { Context } from '../../Context'

import { useNearScreen } from '../../hooks/useNearScreen'

import { Div, Img, Figure } from './styles'

export const Card = ({ card }) => {
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

  return (
    <Div onClick={handleOnClick} ref={element}>
      {
        show &&
          <Figure>
            <Img src={card.imageUrl} alt='' />
          </Figure>
      }
    </Div>
  )
}
