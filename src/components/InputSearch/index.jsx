import React, { useContext } from 'react'
import { Context } from '../../Context'
import { fetchCards } from '../../utils/fetchCards'

import { Container, Input, Button, Icon } from './styles'

export const InputSearch = () => {
  const { setCards, searchString, setSearchString } = useContext(Context)

  const handleSearch = async () => {
    const cards = await fetchCards(searchString)
    setCards(cards)
  }

  const handleOnChange = ({ target }) => {
    setSearchString(target.value)
  }

  const handleOnKeyPress = event => {
    if (event.charCode === 13) {
      handleSearch()
    }
  }

  return (
    <Container>
      <Input onChange={handleOnChange} onKeyPress={handleOnKeyPress} />
      <Button onClick={handleSearch}>
        <Icon />
      </Button>
    </Container>
  )
}
