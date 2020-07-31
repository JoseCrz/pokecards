import styled from 'styled-components'
import { AiFillHome, AiFillStar } from 'react-icons/ai'
import { IoMdOptions } from 'react-icons/io'
import { BsCardList } from 'react-icons/bs'

const generalStyle = `
  color: var(--text-white);
  font-size: 36px;
`

export const Nav = styled.nav`
  background: var(--primary);
  color: var(--text-white);
`

export const Ul = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

export const IconHome = styled(AiFillHome)`
  ${generalStyle}
`

export const IconSettings = styled(IoMdOptions)`
  ${generalStyle}
`
export const IconFav = styled(AiFillStar)`
  ${generalStyle}
`

export const SetsIncon = styled(BsCardList)`
  ${generalStyle}
`
