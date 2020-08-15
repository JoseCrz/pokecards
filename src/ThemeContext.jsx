import React, { useState, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'

export const ThemeContext = createContext()

const Provider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light')
  console.log(Theme[themeMode])

  const customTheme = Theme[themeMode]

  const value = {
    themeMode,
    toggleTheme: () => {
      setThemeMode(prevState => prevState === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={customTheme}>
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
