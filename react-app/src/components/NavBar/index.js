import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../icons/pearbnb.png';
import burger from '../../icons/homepage/burger.svg';
import userJohn from '../../icons/homepage/user.png';
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
import './NavBar.css';
import ProfileButton from '../auth/ProfileButton';

const NavBar = () => {

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
    <>
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
        </div>
      </div>
      <div className='navbar-user-side'>
        <div className='left-of-user'>
          <button className='host-button'>
            <div className='become-a-host'>Become a Host</div>
          </button>
        </div>
        <div className='user-button-section'>
          <ProfileButton />
          {/* <button className='user-button'>
            <div className='burger-user'>
              <img src={burger} alt='burger' className='burger-icon' />
            </div>
            <div className='user-icon'>
              <img src={userJohn} alt='user' className='user-image' />
            </div>
          </button> */}
        </div>
      </div>
    </div>
    {typesSection}
    </>
  )
}

export default NavBar;
