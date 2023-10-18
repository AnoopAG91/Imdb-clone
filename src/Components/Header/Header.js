import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <div className='header'>
        <div className='logo' >
            <NavLink to={'/'} className="logo" >MovieDB</NavLink>
            </div>
            <div className='menu'>
            <NavLink to={'/popular'} activeClassName="active">Popular</NavLink>
            <NavLink to={'/toprated'} activeClassName="active">Top Rated</NavLink>
            <NavLink to={'/upcoming'} activeClassName="active">UpComing</NavLink>
            </div>
           
        
    </div>
  )
}

export default Header