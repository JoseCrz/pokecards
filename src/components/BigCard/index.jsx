import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../Context'

import { ActionButton } from '../ActionButton'
import { LinkStyled } from '../LinkStyled'
import { BigCardOptions } from '../BigCardOptions'

import { Card, ThumbImg, LoadedImage, H2, Top, Placeholder } from './styles'

export const BigCard = ({ showOptions = true }) => {
  const { currentCard, bigPictureLoaded, setBigPictureLoaded, fetchCards, deactivateModal } = useContext(Context)
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
    <>
      {
        cardExists ? (
          <Card>
            <Top>
              <ThumbImg src={imageUrl} isLoaded={bigPictureLoaded} />
              <LoadedImage onLoad={handleOnLoad} src={imageUrlHiRes} isLoaded={bigPictureLoaded} />
            </Top>
            {
              showOptions && (
                <BigCardOptions>
                  {
                    cardExists && (
                      <>
                        {evolvesFrom && <ActionButton onClick={handleOnClick} label='Evolves from' item={evolvesFrom} />}
                        <LinkStyled to={`/sets/${setCode}`} onClick={() => deactivateModal()}>{`Set: ${set}`}</LinkStyled>
                      </>
                    )
                  }
                </BigCardOptions>
              )
            }
          </Card>
        ) : (
          <Placeholder>
            <H2>Select a card!</H2>
          </Placeholder>
        )
      }
    </>

  )
}

BigCard.propTypes = {
  showOptions: PropTypes.bool
}
