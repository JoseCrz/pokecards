import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

import { Container, Description, P, Colors, Color } from './styles'
export const Palette = ({ themeId, name, colors }) => {
  const { selectTheme } = useContext(ThemeContext)

  const handleOnClick = () => {
    selectTheme({ themeId })
  }
  return (
    <Container onClick={handleOnClick}>
      <Colors>
        <Color color={colors.background} />
        <Color color={colors.primary} />
        <Color color={colors.accent || '#FAFAFA'} />
        <Color color={colors.text} />
      </Colors>
      <Description>
        <P>{name}</P>
      </Description>
    </Container>
  )
}
