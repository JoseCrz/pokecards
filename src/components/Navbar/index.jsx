import React from 'react'
import { Link } from '@reach/router'

import { Nav, Ul, IconHome, IconSettings, IconFav, SetsIncon } from './styles'
export const Navbar = () => {
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
            <IconHome />
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
