import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/logo.svg'

import './header.scss'

const Header = props => {
  const { local } = props
  const fillColor = local.pathname === '/' ? '#ffffff' : '#000000'
  return (
    <header>
      <Link to="/">
        <Logo width={80} height={80} fill={fillColor} strokeWidth="1%" />
      </Link>
    </header>
  )
}

export default Header
