import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../icons/pearbnb.png';
import burger from '../../icons/homepage/burger.svg';
import userJohn from '../../icons/homepage/user.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar-container navbar-home'>
      <div className='navbar-logo-side'>
        <NavLink className='logo' exact to="/">
          <div className='logo-container'>
            <img src={logo} alt='logo' id='navbar-logo' />
          </div>
        </NavLink>
      </div>
      <div className='navbar-search-container'>
        <div className='search-container'>

        </div>
      </div>
      <div className='navbar-user-side'>
        <div className='left-of-user'>
          <button className='host-button'>Become a Host</button>
        </div>
        <div className='user-button-section'>
          <button className='user-button'>
            <div className='burger-user'>
              <img src={burger} alt='burger' className='burger-icon' />
            </div>
            <div className='user-icon'>
              <img src={userJohn} alt='user' className='user-image' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
