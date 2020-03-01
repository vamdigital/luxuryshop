import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/logo.svg'

import './header.scss'

const Header = props => {
  const { local } = props
  const fillColor = local.pathname === '/' ? '#ffffff' : '#000000'
  const isHomeClassName = local.pathname === '/' ? 'home-header' : ''

  return (
    <header className={isHomeClassName}>
      <Link to="/Shop" className="nav">
        Shop
      </Link>
      <Link to="/">
        <Logo width={80} height={80} fill={fillColor} />
      </Link>
      <Link to="/Cart" className="nav">
        Cart (0)
      </Link>
    </header>
  )
}

export default Header
