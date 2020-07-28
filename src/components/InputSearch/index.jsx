import React from 'react'

import { Container, Input, Button, Icon } from './styles'

export const InputSearch = ({ onClick }) => {
  return (
    <Container>
      <Input />
      <Button onClick={onClick}>
        <Icon />
      </Button>
    </Container>
  )
}
