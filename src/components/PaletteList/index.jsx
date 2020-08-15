import React from 'react'

import { Palette } from '../Palette'
import { Theme } from '../../styles/Theme'

export const PaletteList = () => {
  return (
    <>
      {
        Object.entries(Theme).map(entry => <Palette key={entry[0]} themeId={entry[0]} {...entry[1]} />)
      }
    </>
  )
}
