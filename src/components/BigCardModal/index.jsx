import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Context } from '../../Context'

import { BigCard } from '../BigCard'

import { Container, Content, CancelButton, CancelIcon } from './styles'

export const BigCardModal = ({ isOpen }) => {
  const { deactivateModal } = useContext(Context)

  if (!isOpen) return null

  const handleOnClick = () => deactivateModal()

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

BigCardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
}
