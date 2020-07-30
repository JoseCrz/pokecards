import React from 'react'
import { Container, Input, Button, Icon } from './styles'

export const InputSearch = ({ value, onClick, onChange, onKeyPress, placeholder }) => {
  return (
    <Container>
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder={placeholder} />
      <Button onClick={onClick}>
        <Icon />
      </Button>
    </Container>
  )
}
