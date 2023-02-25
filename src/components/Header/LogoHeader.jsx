import React from 'react'
import { logo } from '../data/data'

const LogoHeader = () => {
  return (
    <div className='header__logo-box'>
        <img src={logo.img} alt={logo.attr} className='header__logo' />
    </div>
  )
}

export default LogoHeader