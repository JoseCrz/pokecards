import styled from 'styled-components'
import { GiCancel } from 'react-icons/gi'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999999;
`

export const Content = styled.div`
  border-radius: var(--border);
  background: var(--element);
  position: relative;
  padding: 1rem;
  width: 80%;
`

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--element);
  box-shadow: var(--shadow);
  border: none;
  position: absolute;
  top: -20px;
  right: -15px;
`

export const CancelIcon = styled(GiCancel)`
  color: #d81b60;
  font-size: 28px;
`
