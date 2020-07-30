import React, { useContext } from 'react'
import { Context } from '../../Context'

import { InputSearch } from '../InputSearch'
import { RadioButton } from '../RadioButton'

import { Container, H2, RadioContainer } from './styles'

export const Search = () => {
  const { searchString, setSearchString, fetchCards } = useContext(Context)

  const handleOnClick = async () => fetchCards()

  const handleOnChange = ({ target }) => setSearchString(target.value)

  const handleOnKeyPress = ({ charCode }) => charCode === 13 && fetchCards()

  return (
    <Container>
      <H2>Find your favorite Pokémon TCG Card!</H2>
      <RadioContainer>
        <RadioButton>Card name</RadioButton>
        <RadioButton>Series</RadioButton>
        <RadioButton>Set</RadioButton>
      </RadioContainer>
      <InputSearch value={searchString} onClick={handleOnClick} onChange={handleOnChange} onKeyPress={handleOnKeyPress} />
    </Container>
  )
}
