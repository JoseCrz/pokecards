import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Context } from '../../Context'

import { BigCard } from '../BigCard'

import { Container, Content, CancelButton, CancelIcon } from './styles'

export const BigCardModal = ({ isOpen }) => {
  const { setIsModalOpen } = useContext(Context)
  if (!isOpen) return null

  const handleOnClick = () => setIsModalOpen(false)

  return ReactDOM.createPortal(
    <Container>
      <Content>
        <CancelButton onClick={handleOnClick}>
          <CancelIcon />
        </CancelButton>
        <BigCard />
      </Content>
    </Container>
    , document.querySelector('#modal'))
}
