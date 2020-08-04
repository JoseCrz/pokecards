import styled from 'styled-components'

import { AiOutlineSearch } from 'react-icons/ai'

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  padding: 8px 16px;
  border: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  color: gray;
  width: 80%;

  &:focus {
    outline-color: var(--primary);
  }
`

export const Button = styled.button`
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 20%;
`

export const Icon = styled(AiOutlineSearch)`
  color: var(--text-white);
  font-size: 28px;
`
