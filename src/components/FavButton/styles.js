import styled from 'styled-components'
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai'
import { phone } from '../../styles/MediaQueries'

export const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--element);
  box-shadow: var(--shadow);
  width: 30px;
  height: 30px;
  font-size: 24px;
  padding:0;
  opacity: 0;
  border-radius: 50%;
  border: none;
  top: 5px;
  right: 5px;
  outline:none;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  z-index: 99;
 
  
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
`
export const IconFavsFull = styled(AiFillStar)`
  color: #fdd835;
`

export const DeleteFav = styled(AiOutlineDelete)`
  color: #d81b60;
`
