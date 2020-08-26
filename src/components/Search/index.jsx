import React, { useContext, useState, useCallback } from 'react'
import { Context } from '../../Context'

import { InputSearch } from '../InputSearch'

import { Container, H2, Arranger } from './styles'

export const Search = React.memo(() => {
  const { fetchCards } = useContext(Context)
  const [keyword, setKeyword] = useState('')

  const handleOnChange = useCallback(({ target }) => setKeyword(target.value.trim()), [setKeyword])

  const handleOnSubmit = useCallback((event) => {
    event.preventDefault()
    fetchCards(keyword)
  }, [keyword])

  return (
    <Container>
      <H2>Find your favorite Pokémon TCG Card!</H2>
      <Arranger>
        <InputSearch
          value={keyword}
          onSubmit={handleOnSubmit}
          onChange={handleOnChange}
          placeholder='Name of card'
        />
      </Arranger>
    </Container>
  )
})
