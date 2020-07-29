import React from 'react'
import { Container, Input, Button, Icon } from './styles'

export const InputSearch = ({ value, onClick, onChange, onKeyPress }) => {
  return (
    <Container>
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <Button onClick={onClick}>
        <Icon />
      </Button>
    </Container>
  )
}
