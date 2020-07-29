import React, { useContext } from 'react'
import { Context } from '../../Context'
import { fetchCards } from '../../utils/fetchCards'

import { Container, Input, Button, Icon } from './styles'

export const InputSearch = () => {
  const { setCards } = useContext(Context)

  const handleOnClick = async () => {
    const cards = await fetchCards('pikachu')
    setCards(cards)
  }

  return (
    <Container>
      <Input />
      <Button onClick={handleOnClick}>
        <Icon />
      </Button>
    </Container>
  )
}
