import styled from 'styled-components'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'

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
  z-index: 999;
`

export const IconFavs = styled(AiOutlineStar)`
  color: #fdd835;
  font-size: 48px;
`

export const DeleteFav = styled(TiDeleteOutline)`
  color: #d81b60;
  font-size: 48px;
`
