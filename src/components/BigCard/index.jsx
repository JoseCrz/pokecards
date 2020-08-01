import React, { useContext } from 'react'
import { Context } from '../../Context'

import { ActionButton } from '../ActionButton'
import { LinkStyled } from '../LinkStyled'
import { BigCardOptions } from '../BigCardOptions'

import { Card, ThumbImg, LoadedImage, H2, Top } from './styles'

export const BigCard = ({ showOptions = true }) => {
  const { currentCard, bigPictureLoaded, setBigPictureLoaded, fetchCards } = useContext(Context)
  const { imageUrl, imageUrlHiRes, evolvesFrom, set, setCode } = currentCard

  const cardExists = Object.keys(currentCard).length > 0

  const handleOnLoad = () => {
    setBigPictureLoaded(true)
  }

  const handleOnClick = () => {
    console.log(evolvesFrom)
    fetchCards(evolvesFrom)
  }

  return (
    <Card>
      <Top>
        {
          cardExists ? (
            <>
              <ThumbImg src={imageUrl} isLoaded={bigPictureLoaded} />
              <LoadedImage onLoad={handleOnLoad} src={imageUrlHiRes} isLoaded={bigPictureLoaded} />
            </>
          ) : <H2>Select an image</H2>
        }
      </Top>
      {
        showOptions && (
          <BigCardOptions>
            {
              cardExists && (
                <>
                  {evolvesFrom && <ActionButton onClick={handleOnClick} label='Evolves from' item={evolvesFrom} />}
                  <LinkStyled to={`/sets/${setCode}`}>{`Set: ${set}`}</LinkStyled>
                </>
              )
            }
          </BigCardOptions>
        )
      }
    </Card>
  )
}
