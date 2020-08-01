import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { Context } from '../../Context'

import { Nav, Ul, IconHome, IconSettings, IconFav, SetsIncon } from './styles'
export const Navbar = () => {
  const { setSearchString } = useContext(Context)
  return (
    <Nav>
      <Ul>
        <li>
          <Link to='/'>
            <IconSettings />
          </Link>
        </li>
        <li>
          <Link to='/sets'>
            <SetsIncon />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <IconHome onClick={() => setSearchString('')} />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <IconFav />
          </Link>
        </li>
      </Ul>
    </Nav>
  )
}
