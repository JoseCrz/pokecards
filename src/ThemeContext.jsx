import React, { useState, useEffect, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'

export const ThemeContext = createContext()

const Provider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    window.localStorage.getItem('theme') || 'pearl'
  )

  useEffect(() => {
    window.localStorage.setItem('theme', themeMode)
  }, [themeMode])

  const currentTheme = Theme[themeMode]

  const value = {
    themeMode,
    selectTheme: ({ themeId }) => {
      setThemeMode(themeId)
    }
  }

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={currentTheme}>
        {
          children
        }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default {
  Provider,
  Consumer: ThemeContext.Consumer
}
