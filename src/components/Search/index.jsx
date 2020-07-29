import React, { useContext } from 'react'
import { Context } from '../../Context'
import { fetchCards } from '../../utils/fetchCards'

import { InputSearch } from '../InputSearch'

import { Container } from './styles'

export const Search = () => {
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
      <h2>Search your favorite Pokémon</h2>
      <InputSearch onClick={handleSearch} onChange={handleOnChange} onKeyPress={handleOnKeyPress} />
    </Container>
  )
}
