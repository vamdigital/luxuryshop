import React from 'react'
import { withRouter } from 'react-router-dom'
import Logo from '../../assets/icons/logo.svg'
import './header.scss'

const Header = props => {
  const { location } = props
  const fillColor = location.pathname === '/' ? '#ffffff' : '#000000'
  return (
    <header>
      <Logo width={100} height={100} fill={fillColor} strokeWidth="1%" />
    </header>
  )
}

export default withRouter(Header)
