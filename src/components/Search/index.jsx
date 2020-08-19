import React, { useContext } from 'react'
import { Context } from '../../Context'

import { InputSearch } from '../InputSearch'

import { Container, H2, Arranger } from './styles'

export const Search = () => {
  const { searchString, setSearchString, fetchCards } = useContext(Context)

  const handleOnChange = ({ target }) => setSearchString(target.value.trim())

  const handleOnSubmit = event => {
    event.preventDefault()
    fetchCards()
  }

  return (
    <Container>
      <H2>Find your favorite Pokémon TCG Card!</H2>
      <Arranger>
        <InputSearch
          value={searchString}
          onSubmit={handleOnSubmit}
          onChange={handleOnChange}
          placeholder='Name of card'
        />
      </Arranger>
    </Container>
  )
}
