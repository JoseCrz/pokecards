import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../ThemeContext'

import { Container, Description, P, Colors, Color } from './styles'
export const Palette = ({ themeId, name, colors }) => {
  const { selectTheme } = useContext(ThemeContext)

  const handleOnClick = () => selectTheme({ themeId })

  return (
    <Container onClick={handleOnClick}>
      <Colors>
        <Color color={colors.background} />
        <Color color={colors.primary} />
        <Color color={colors.accent} />
        <Color color={colors.text} />
      </Colors>
      <Description>
        <P>{name}</P>
      </Description>
    </Container>
  )
}

Palette.propTypes = {
  themeId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colors: PropTypes.objectOf(PropTypes.string)
}
