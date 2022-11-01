import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../icons/pearbnb.png';
import pear from '../../icons/pear.png';
import search from '../../icons/homepage/search.svg';
import omg from '../../icons/types/1-omg.svg';
import luxe from '../../icons/types/2-luxe.svg';
import bf from '../../icons/types/3-beachfront.svg';
import man from '../../icons/types/4-mansions.svg';
import cab from '../../icons/types/5-cabins.svg';
import ryo from '../../icons/types/6-ryokans.svg';
import des from '../../icons/types/7-desert.svg';
import lake from '../../icons/types/8-lakefront.svg';
import tiny from '../../icons/types/9-tinyhomes.svg';
import cast from '../../icons/types/10-castles.svg';
import con from '../../icons/types/11-containers.svg';
import camp from '../../icons/types/12-camping.svg';
import burger from '../../icons/homepage/burger.svg';
import userJohn from '../../icons/homepage/user.png';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';
import ProfileButton from '../auth/ProfileButton';
import LoginSignupModal from '../auth/LoginSignupModal';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  const url = useLocation().pathname;
  const [showMenu, setShowMenu] = useState(false);
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

  const typesSection = (
    <div className='navbar-types-section'>
      <div className='types-section-inner'>
        <button className='type-button'>
          <img src={omg} alt='omg' className='type-icon' />
          <span className='type-name'>OMG!</span>
        </button>
        <button className='type-button'>
          <img src={luxe} alt='luxe' className='type-icon' />
          <span className='type-name'>Luxe</span>
        </button>
        <button className='type-button'>
          <img src={bf} alt='bf' className='type-icon' />
          <span className='type-name'>Beachfront</span>
        </button>
        <button className='type-button'>
          <img src={man} alt='man' className='type-icon' />
          <span className='type-name'>Mansions</span>
        </button>
        <button className='type-button'>
          <img src={cab} alt='cab' className='type-icon' />
          <span className='type-name'>Cabins</span>
        </button>
        <button className='type-button'>
          <img src={ryo} alt='ryo' className='type-icon' />
          <span className='type-name'>Ryokans</span>
        </button>
        <button className='type-button'>
          <img src={des} alt='des' className='type-icon' />
          <span className='type-name'>Desert</span>
        </button>
        <button className='type-button'>
          <img src={lake} alt='lake' className='type-icon' />
          <span className='type-name'>Lakefront</span>
        </button>
        <button className='type-button'>
          <img src={tiny} alt='tiny' className='type-icon' />
          <span className='type-name'>Tiny homes</span>
        </button>
        <button className='type-button'>
          <img src={cast} alt='cast' className='type-icon' />
          <span className='type-name'>Castles</span>
        </button>
        <button className='type-button'>
          <img src={con} alt='con' className='type-icon' />
          <span className='type-name'>Containers</span>
        </button>
        <button className='type-button'>
          <img src={camp} alt='camp' className='type-icon' />
          <span className='type-name'>Camping</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className='entire-header'>
    <div className='navbar-container'>
      <div className={url === '/' ? 'navbar-inner navbar-home' : 'navbar-inner navbar-else'}>
      <div className='navbar-logo-side'>
        <NavLink className='logo' exact to="/">
          <div className='logo-container'>
            <img src={url.includes('new') ? pear : logo} alt='logo' id='navbar-logo' />
          </div>
        </NavLink>
      </div>
      <div className='navbar-search-container'>
        {/* {url.includes('new') ? null : <div className='search-container'>
            <button className='where-searchbutton'>Anywhere</button>
            <span className='search-separator' />
            <button className='type-searchbutton'>Any type</button>
            <span className='search-separator' />
            <button className='guests-searchbutton'>
              <div className='add-guests'>Add guests</div>
              <div className='search-searchbutton'>
                <img src={search} alt='search' className='search-button' />
              </div>
            </button>
        </div>} */}
      </div>
      <div className='navbar-user-side'>
        <div className='left-of-user'>
          {url.includes('new') ? null : <button className='host-button'>
            <div className='become-a-host'>Become a Host</div>
          </button>}
        </div>
        <div className='user-button-section'>
          <button className='user-button' onClick={openMenu}>
            <div className='user-button-inner'>
              <div className='burger-user'>
                <img src={burger} alt='burger' className='burger-icon' />
              </div>
              <div className='user-icon'>
                <img src={userJohn} alt='user' className='user-image' />
              </div>
            </div>
          </button>
          {user && (
            <div className={showMenu ? "profile-dropdown visible-dropdown logged-in-dropdown" : "profile-dropdown invisible-dropdown logged-in-dropdown"}>
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
          {!user && (
            <div className={showMenu ? "profile-dropdown visible-dropdown logged-out-dropdown" : "profile-dropdown invisible-dropdown logged-out-dropdown"}>
                <LoginSignupModal />
            </div>
          )}
        </div>
      </div>
    {url === '/' ? typesSection : null}
    </div>
    </div>
    </div>
  )
}

export default NavBar;
