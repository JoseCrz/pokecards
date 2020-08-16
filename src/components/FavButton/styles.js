import styled from 'styled-components'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { phone } from '../../styles/MediaQueries'

export const Button = styled.button`
  background: var(--element);
  box-shadow: var(--shadow);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 5px;
  right: 5px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  outline:none;
  
  &:hover {
    box-shadow: var(--shadow--big);
    transform: scale(1.1);
  }

  ${phone} {
    opacity: 1;
  }
`

export const IconFavs = styled(AiOutlineStar)`
  color: #fdd835;
  font-size: 48px;
`
export const IconFavsFull = styled(AiFillStar)`
  color: #fdd835;
  font-size: 48px;
`

export const DeleteFav = styled(TiDeleteOutline)`
  color: #d81b60;
  font-size: 48px;
`
