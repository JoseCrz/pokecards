import React from 'react'

import { Palette } from '../Palette'
import { Theme } from '../../styles/Theme'

import { Container } from './styles'

export const PaletteList = () => {
  return (
    <Container>
      {
        Object.entries(Theme).map(entry => <Palette key={entry[0]} themeId={entry[0]} {...entry[1]} />)
      }
    </Container>
  )
}
