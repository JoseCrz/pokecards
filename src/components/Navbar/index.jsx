import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { IconContext } from 'react-icons'
import {
  AiFillHome as IconHomeFull,
  AiOutlineHome as IconHome,
  AiOutlineSetting as IconSettings,
  AiFillSetting as IconSettingsFull,
  AiOutlineStar as IconFavs,
  AiFillStar as IconFavsFull
} from 'react-icons/ai'

import { BsCollection as IconSets, BsFillCollectionFill as IconSetsFull } from 'react-icons/bs'
import { Context } from '../../Context'

import { Nav, Ul } from './styles'
export const Navbar = () => {
  const { setSearchString } = useContext(Context)

  return (
    <IconContext.Provider value={{ color: 'white', size: '36px' }}>
      <Nav>
        <Ul>
          <li>
            <Link to='/settings'>
              {
                window.location.pathname.includes('/settings') ? <IconSettingsFull /> : <IconSettings />
              }
            </Link>
          </li>
          <li>
            <Link to='/sets'>
              {
                window.location.pathname.includes('/sets') ? <IconSetsFull /> : <IconSets />
              }
            </Link>
          </li>
          <li>
            <Link to='/' onClick={() => setSearchString('')}>
              {
                window.location.pathname === '/' ? <IconHomeFull /> : <IconHome />
              }
            </Link>
          </li>
          <li>
            <Link to='/favs'>
              {
                window.location.pathname.includes('/favs') ? <IconFavsFull /> : <IconFavs />
              }
            </Link>
          </li>
        </Ul>
      </Nav>
    </IconContext.Provider>
  )
}
