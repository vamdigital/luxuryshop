import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import './header.scss'

const Header = props => {
  const { local } = props
  const fillColor = local.pathname === '/' ? '#ffffff' : '#000000'
  return (
    <header>
      <Logo width={100} height={100} fill={fillColor} strokeWidth="1%" />
    </header>
  )
}

export default Header
