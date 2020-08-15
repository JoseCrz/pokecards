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

import { Nav, Ul, Li, Div } from './styles'
export const Navbar = () => {
  const { setSearchString, setCurrentCard } = useContext(Context)

  return (
    <IconContext.Provider value={{ color: 'var(--icon)', size: '36px' }}>
      <Nav>
        <Ul>
          <Div>
            <Li>
              <Link to='/' onClick={() => setSearchString('')}>
                {
                  window.location.pathname === '/' ? <IconHomeFull /> : <IconHome />
                }
              </Link>
            </Li>
            <Li>
              <Link to='/sets'>
                {
                  window.location.pathname.includes('/sets') ? <IconSetsFull /> : <IconSets />
                }
              </Link>
            </Li>
            <Li>
              <Link to='/favs' onClick={() => setCurrentCard({})}>
                {
                  window.location.pathname.includes('/favs') ? <IconFavsFull /> : <IconFavs />
                }
              </Link>
            </Li>
          </Div>
          <Li>
            <Link to='/settings'>
              {
                window.location.pathname.includes('/settings') ? <IconSettingsFull /> : <IconSettings />
              }
            </Link>
          </Li>
        </Ul>
      </Nav>
    </IconContext.Provider>
  )
}
