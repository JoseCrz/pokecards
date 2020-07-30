import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--element);
  border-radius: var(--border);
  box-shadow: var(--shadow);
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: var(--shadow--big);
    transform: scale(1.05);
    z-index: 99;
  }
`
export const Img = styled.img`
  max-width: 60%;
  max-height: 80%;
  object-fit: cover;
  object-position: center;
`
