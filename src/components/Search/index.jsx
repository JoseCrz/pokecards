import React from 'react'

import { InputSearch } from '../InputSearch'

import { Container } from './styles'

export const Search = () => {
  return (
    <Container>
      <h2>Search your favorite Pokémon</h2>
      <InputSearch />
    </Container>
  )
}
