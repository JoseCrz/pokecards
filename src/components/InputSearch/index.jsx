import React from 'react'
import { Container, Input, Button, Icon } from './styles'

export const InputSearch = ({ onClick, onChange, onKeyPress }) => {
  return (
    <Container>
      <Input onChange={onChange} onKeyPress={onKeyPress} />
      <Button onClick={onClick}>
        <Icon />
      </Button>
    </Container>
  )
}
