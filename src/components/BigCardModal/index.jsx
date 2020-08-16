import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Context } from '../../Context'

import { BigCard } from '../BigCard'

import { Container, Content } from './styles'

export const BigCardModal = ({ isOpen }) => {
  const { setIsModalOpen } = useContext(Context)
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <Container onClick={() => setIsModalOpen(false)}>
      <Content>
        <BigCard />
      </Content>
    </Container>
    , document.querySelector('#modal'))
}
