import React, { useState } from 'react'
import { MdExpandMore as LessIcon, MdExpandLess as MoreIcon } from 'react-icons/md'

import { Container, InnerContainer, Button } from './styles'

export const BigCardOptions = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <Container isMinimized={isMinimized}>
      <InnerContainer>
        {
          children
        }
        <Button onClick={() => setIsMinimized(!isMinimized)} isMinimized={isMinimized}>
          {
            // isMinimized ? '+' : '-'
            isMinimized ? <MoreIcon /> : <LessIcon />
          }
        </Button>
      </InnerContainer>
    </Container>
  )
}
