import React from 'react'

import { Button, Label, Item } from './styles'

export const ActionButton = ({ label, item, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Label>
        {`${label}:`}
      </Label>
      <Item>
        {item}
      </Item>
    </Button>
  )
}
