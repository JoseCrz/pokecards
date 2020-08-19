import React from 'react'
import { Container, Input, Button, Icon } from './styles'

export const InputSearch = ({ value, onSubmit, onChange, placeholder }) => {
  return (
    <Container onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
      <Button>
        <Icon />
      </Button>
    </Container>
  )
}
