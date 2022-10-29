import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import burger from '../../icons/homepage/burger.svg';
import userJohn from '../../icons/homepage/user.png';
import LogoutButton from './LogoutButton';
import './ProfileButton.css'

function ProfileButton() {
  const user = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);
  // console.log('this is the user',user)
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
    <button className='user-button' onClick={openMenu}>
            <div className='burger-user'>
              <img src={burger} alt='burger' className='burger-icon' />
            </div>
            <div className='user-icon'>
              <img src={userJohn} alt='user' className='user-image' />
            </div>
    </button>
      {showMenu && user && (
        <div className="profile-dropdown">
          <div>
            <NavLink className='dropdown-text' to='/listings/current'>
              Listings
            </NavLink>
          </div>
          <div>
            <NavLink className='dropdown-text' to='/reviews/current'>
              Reviews
            </NavLink>
          </div>
          {/* <div >
            <NavLink className='dropdown-text' to='/bookings/current'>
              Trips
            </NavLink>
          </div>
          <div>
            <NavLink className='dropdown-text' to='/wishlists/current'>
              Wishlists
            </NavLink>
          </div> */}
          <div id='logout'>
            <LogoutButton />
          </div>
        </div>
      )}
      {showMenu && !user && (
        <div className="profile-dropdown">
            <div className="login-button">
                Log in
            </div>
            <div className="signup-button">
                Sign up
            </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
