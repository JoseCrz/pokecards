import React from 'react'
import PropTypes from 'prop-types'

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

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
