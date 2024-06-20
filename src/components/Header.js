import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>
       Colletta
        <span className='logo__span'>Italian food & wine</span>
      </h1>

      <ul className='header__ul'>
        <li><NavLink to="/">Ana səhifə</NavLink></li>
        <li><NavLink to="/menu">Menyu</NavLink></li>
        <li><NavLink to="/about">Haqqımızda</NavLink></li>
        <li><NavLink to="/galery">Qalareya</NavLink></li>
        <li><NavLink to="/takeaway">Gəl al</NavLink></li>
        <li><NavLink to="/rezervation"><button className='btn-rezervation'>Rezervasiya</button></NavLink></li>
      </ul>
    </header>
  )
}

export default Header
