import React, { useContext } from 'react'
import { Context } from '../../Context'
import ReactDOM from 'react-dom'

import { BigCard } from '../BigCard'

import { Container, Content } from './styles'

export const BigCardModal = ({ isOpen }) => {
  console.log('BigCardModal -> isOpen', isOpen)

  if (isOpen) {
    return ReactDOM.createPortal(
      <Container>
        <Content>
          <BigCard />
        </Content>
      </Container>
      , document.querySelector('#modal'))
  }
  return null
}
