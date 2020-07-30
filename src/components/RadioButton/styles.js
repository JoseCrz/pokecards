import styled from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: var(--border);
  border: 2px solid var(--primary);
  padding: 6px 12px;
  color: var(--primary);
  transition: cubic-bezier(0.215, 0.610, 0.355, 1) .2s;
  margin: 0 10px 5px 0;
  
  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`
