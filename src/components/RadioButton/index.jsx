import React from 'react'

import { Button } from './styles'

export const RadioButton = ({ onClick, children }) => {
  return (
    <Button onClick={onClick}>{children}</Button>
  )
}
