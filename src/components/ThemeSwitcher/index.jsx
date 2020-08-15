import React, { useState, useContext } from 'react'
import { IoMdSunny as Sun, IoMdMoon as Moon } from 'react-icons/io'
import { ThemeContext } from '../../ThemeContext'
import Switch from 'react-switch'

export const ThemeSwitcher = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext)

  const [checked, setChecked] = useState(false)

  return (
    <label>
      <span>Change theme</span>
      <Switch
        onChange={() => toggleTheme()}
        checked={themeMode === 'light'}
        checkedIcon={<Sun />}
        uncheckedIcon={<Moon />}
      />
    </label>
  )
}
