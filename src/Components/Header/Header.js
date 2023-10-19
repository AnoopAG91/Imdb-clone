import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'

function Header() {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className='header'>
        <div className='logo' >
            <NavLink to={'/'} className="logo" >MovieDB</NavLink>
            </div>
            <div className={isMobile ? 'mob-menu' : 'menu' } onClick={()=> setIsMobile(false)} >
            <NavLink to={'/popular'} activeClassName="active">Popular</NavLink>
            <NavLink to={'/toprated'} activeClassName="active">Top Rated</NavLink>
            <NavLink to={'/upcoming'} activeClassName="active">UpComing</NavLink>
            </div>
            <button className='toggle-btn' onClick={()=> setIsMobile(!isMobile)}>
          {isMobile? (<AiOutlineClose/>) : (<RxHamburgerMenu/>)}
        </button>
    </div>
  )
}

export default Header