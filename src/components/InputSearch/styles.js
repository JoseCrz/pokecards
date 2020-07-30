import styled from 'styled-components'

import { AiOutlineSearch } from 'react-icons/ai'

export const Container = styled.div`
  display: flex;
`

export const Input = styled.input`
  padding: 5px;
  border: none;
  border-top-left-radius: var(--border);
  border-bottom-left-radius: var(--border);
  color: gray;

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
  border-top-right-radius: var(--border);
  border-bottom-right-radius: var(--border);
  width: 35px;
`

export const Icon = styled(AiOutlineSearch)`
  color: var(--text-white);
  font-size: 32px;
`
