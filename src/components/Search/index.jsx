import React, { useContext } from 'react'
import { Context } from '../../Context'

import { InputSearch } from '../InputSearch'

import { Container } from './styles'

export const Search = () => {
  const { searchString, setSearchString, fetchCards } = useContext(Context)

  const handleOnClick = async () => fetchCards()

  const handleOnChange = ({ target }) => setSearchString(target.value)

  const handleOnKeyPress = ({ charCode }) => charCode === 13 && fetchCards()

  return (
    <Container>
      <h2>Search your favorite Pokémon</h2>
      <InputSearch value={searchString} onClick={handleOnClick} onChange={handleOnChange} onKeyPress={handleOnKeyPress} />
    </Container>
  )
}
