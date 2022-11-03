import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import logo from '../../icons/pearbnb.png';
import pear from '../../icons/pear.png';
import pearout from '../../icons/pearout.png';
// import search from '../../icons/homepage/search.svg';
import burger from '../../icons/homepage/burger.svg';
import userJohn from '../../icons/homepage/user.png';
import { logout } from '../../store/session';
import './NavBar.css';
import LoginSignupModal from '../auth/LoginSignupModal';
import { queryType } from '../../store/listings';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  const url = useLocation().pathname;
  const dispatch = useDispatch();
  const history =  useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [ type, setType ] = useState('');
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const changeType = (param) => {
    if (type === param) setType('');
    else setType(param);
  }

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/');
  };

  const handleHost = () => {
    if (!user) {
        alert("Please log in or create an account to host a listing.");
        // history.push("/");
    } else {
      history.push('/listings/new');
    }
  }

  useEffect(() => {
    dispatch(queryType(type));
  }, [type, dispatch]);

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
        <button className={type === 'omg' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('omg')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
             preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'omg' ? "#000000" : '#717171'} stroke="none">
            <path d="M397 826 c-88 -32 -157 -106 -179 -194 -9 -38 -22 -53 -94 -110 -46
            -36 -84 -69 -84 -73 0 -4 34 -36 75 -70 41 -34 75 -68 75 -75 0 -8 -7 -32 -16
            -54 -14 -36 -20 -40 -50 -40 -31 0 -34 -2 -34 -30 l0 -31 56 3 57 3 26 70 27
            70 97 3 97 3 0 -76 0 -75 30 0 30 0 0 75 0 75 109 0 108 0 28 -75 27 -75 59 0
            c59 0 59 0 59 30 0 28 -3 30 -37 30 -37 0 -38 1 -60 60 l-22 60 70 56 c38 31
            69 60 69 64 0 4 -38 36 -84 72 -75 59 -84 71 -95 114 -37 147 -204 239 -344
            190z m146 -57 c50 -14 106 -64 130 -117 10 -24 17 -46 14 -48 -2 -2 -97 -3
            -210 -2 l-205 3 13 39 c35 102 147 156 258 125z m231 -275 c32 -25 54 -49 50
            -53 -5 -4 -30 -24 -55 -44 l-46 -37 -243 0 -243 0 -54 41 c-29 23 -53 44 -53
            48 1 3 26 25 57 49 l57 42 235 0 236 0 59 -46z"/>
            <path d="M282 471 c-23 -14 -10 -46 18 -46 20 0 25 5 25 25 0 26 -20 36 -43
            21z"/>
            <path d="M462 471 c-23 -14 -10 -46 18 -46 20 0 25 5 25 25 0 26 -20 36 -43
            21z"/>
            <path d="M642 471 c-23 -14 -10 -46 18 -46 20 0 25 5 25 25 0 26 -20 36 -43
            21z"/>
            </g>
          </svg>
          <span className={type === 'omg' ? 'type-name' : 'type-name type-name-grey'}>OMG!</span>
        </button>
        <button className={type === 'luxe' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('luxe')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
             preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'luxe' ? "#000000" : '#717171'} stroke="none">
            <path d="M418 930 c-24 -25 -29 -37 -26 -65 4 -31 1 -35 -27 -41 -50 -11 -144
            -63 -190 -105 -53 -49 -97 -116 -121 -186 -13 -37 -24 -53 -36 -53 -13 0 -18
            -8 -18 -30 l0 -30 480 0 480 0 0 30 c0 22 -5 30 -18 30 -13 0 -22 12 -31 43
            -38 129 -151 244 -285 291 -59 21 -61 22 -58 54 3 25 -3 39 -27 62 -40 40 -82
            40 -123 0z m87 -50 c8 -25 -1 -40 -25 -40 -23 0 -38 39 -19 51 22 14 37 10 44
            -11z m141 -140 c98 -48 178 -139 208 -237 l7 -23 -381 0 -381 0 6 23 c27 88
            114 191 196 233 70 35 114 44 203 40 62 -4 91 -10 142 -36z"/>
            <path d="M664 337 l-70 -34 -17 28 -16 29 -201 0 c-250 0 -240 6 -240 -138 0
            -85 3 -101 19 -116 19 -17 264 -85 308 -86 29 0 353 162 378 189 29 33 26 94
            -5 126 -41 40 -75 41 -156 2z m110 -43 c34 -34 18 -47 -169 -141 l-152 -76
            -137 34 -136 33 0 78 0 78 175 0 c96 0 175 -3 175 -8 0 -4 -7 -18 -16 -30 -14
            -20 -24 -22 -100 -22 l-84 0 0 -30 0 -30 83 0 c81 0 83 1 207 65 69 35 128 64
            132 65 4 0 14 -7 22 -16z"/>
            </g>
          </svg>
          <span className={type === 'luxe' ? 'type-name' : 'type-name type-name-grey'}>Luxe</span>
        </button>
        <button className={type === 'beach' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('beach')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
             preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'beach' ? "#000000" : '#717171'} stroke="none">
            <path d="M563 910 c-33 -20 -53 -48 -53 -74 0 -26 49 -20 72 9 22 29 63 33 89
            9 16 -14 14 -18 -22 -52 -23 -22 -42 -50 -45 -69 -6 -31 -5 -33 22 -33 23 0
            32 7 44 33 20 43 32 40 43 -8 14 -65 3 -173 -25 -242 l-26 -63 33 0 c31 0 35
            4 57 58 19 48 23 75 23 175 0 114 1 117 17 96 10 -11 18 -27 18 -35 0 -9 11
            -14 31 -14 30 0 31 1 25 32 -7 36 -49 85 -85 99 -19 8 -21 12 -11 24 20 24 66
            18 88 -10 24 -30 72 -35 72 -7 0 68 -108 114 -180 77 -27 -14 -33 -14 -60 0
            -40 20 -89 19 -127 -5z"/>
            <path d="M256 838 c-118 -65 -195 -157 -196 -235 0 -30 3 -33 30 -33 l29 0 3
            -87 3 -88 205 0 205 0 3 88 3 87 29 0 c27 0 30 3 30 33 -1 50 -32 108 -87 158
            -51 45 -159 109 -184 109 -8 0 -40 -15 -73 -32z m150 -73 c61 -36 124 -98 124
            -122 0 -10 -40 -13 -200 -13 -229 0 -230 1 -156 75 44 43 127 94 157 95 8 0
            42 -16 75 -35z m74 -255 l0 -60 -60 0 -60 0 0 30 c0 27 -3 30 -30 30 -27 0
            -30 -3 -30 -30 l0 -30 -60 0 -60 0 0 60 0 60 150 0 150 0 0 -60z"/>
            <path d="M126 305 c-20 -14 -43 -25 -51 -25 -10 0 -15 -10 -15 -30 0 -25 4
            -30 23 -30 12 0 39 11 59 25 20 14 46 25 58 25 12 0 38 -11 58 -25 26 -18 50
            -25 82 -25 32 0 56 7 82 25 20 14 46 25 58 25 12 0 38 -11 58 -25 26 -18 50
            -25 82 -25 32 0 56 7 82 25 46 31 70 31 116 0 20 -14 47 -25 59 -25 19 0 23 5
            23 30 0 20 -5 30 -15 30 -8 0 -31 11 -51 25 -48 33 -100 33 -148 0 -20 -14
            -50 -25 -66 -25 -16 0 -46 11 -66 25 -23 16 -51 25 -74 25 -23 0 -51 -9 -74
            -25 -20 -14 -50 -25 -66 -25 -16 0 -46 11 -66 25 -23 16 -51 25 -74 25 -23 0
            -51 -9 -74 -25z"/>
            <path d="M126 155 c-20 -14 -43 -25 -51 -25 -10 0 -15 -10 -15 -30 0 -25 4
            -30 23 -30 12 0 39 11 59 25 20 14 46 25 58 25 12 0 38 -11 58 -25 50 -34 114
            -34 164 0 20 14 46 25 58 25 12 0 38 -11 58 -25 26 -18 50 -25 82 -25 32 0 56
            7 82 25 46 31 70 31 116 0 20 -14 47 -25 59 -25 19 0 23 5 23 30 0 20 -5 30
            -15 30 -8 0 -31 11 -51 25 -48 33 -100 33 -148 0 -47 -32 -85 -32 -132 0 -48
            33 -100 33 -148 0 -20 -14 -50 -25 -66 -25 -16 0 -46 11 -66 25 -23 16 -51 25
            -74 25 -23 0 -51 -9 -74 -25z"/>
            </g>
          </svg>
          <span className={type === 'beach' ? 'type-name' : 'type-name type-name-grey'}>Beachfront</span>
        </button>
        <button className={type === 'mansions' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('mansions')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'mansions' ? "#000000" : '#717171'} stroke="none">
            <path d="M120 855 l0 -45 -47 0 c-27 0 -54 -4 -61 -8 -9 -7 -12 -88 -10 -373
            l3 -364 475 0 475 0 0 370 0 370 -57 3 -58 3 0 44 c0 43 -1 45 -30 45 -29 0
            -30 -2 -30 -45 l0 -45 -300 0 -300 0 0 45 c0 43 -1 45 -30 45 -29 0 -30 -2
            -30 -45z m278 -122 c-8 -10 -43 -51 -78 -90 l-63 -73 -98 0 -99 0 0 90 0 90
            177 0 c167 0 175 -1 161 -17z m502 -73 l0 -90 -99 0 -98 0 -63 73 c-35 39 -70
            80 -78 90 -14 16 -6 17 161 17 l177 0 0 -90z m-326 -33 l86 -98 0 -205 0 -204
            -30 0 -30 0 0 95 c0 95 0 96 -34 133 -31 33 -39 37 -85 37 -44 0 -55 -4 -83
            -33 -32 -32 -33 -35 -36 -132 l-4 -100 -29 0 -29 0 0 203 0 204 88 101 c48 56
            90 100 94 99 3 -1 45 -46 92 -100z m-334 -252 l0 -136 -30 16 c-37 19 -83 19
            -120 0 l-30 -16 0 136 0 135 90 0 90 0 0 -135z m660 0 l0 -136 -30 16 c-37 19
            -83 19 -120 0 l-30 -16 0 136 0 135 90 0 90 0 0 -135z m-380 -65 c17 -17 20
            -33 20 -105 l0 -85 -60 0 -60 0 0 85 c0 72 3 88 20 105 11 11 29 20 40 20 11
            0 29 -9 40 -20z m-309 -129 c51 -51 42 -61 -61 -61 -75 0 -90 3 -90 16 0 28
            56 74 90 74 22 0 41 -9 61 -29z m660 0 c51 -51 42 -61 -61 -61 -75 0 -90 3
            -90 16 0 28 56 74 90 74 22 0 41 -9 61 -29z"/>
            <path d="M462 561 c-23 -14 -10 -46 18 -46 20 0 25 5 25 25 0 26 -20 36 -43
            21z"/>
            </g>
          </svg>
          <span className={type === 'mansions' ? 'type-name' : 'type-name type-name-grey'}>Mansions</span>
        </button>
        <button className={type === 'cabins' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('cabins')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'cabins' ? "#000000" : '#717171'} stroke="none">
            <path d="M445 896 c-16 -8 -122 -107 -235 -220 l-205 -206 23 -22 c21 -21 23
            -21 39 -5 16 15 18 14 29 -20 9 -26 10 -42 2 -56 -5 -10 -7 -40 -4 -66 7 -56
            7 -63 0 -128 -5 -49 -4 -55 24 -83 l30 -30 332 0 332 0 30 30 c28 28 29 34 24
            83 -7 65 -7 72 0 128 3 26 1 56 -4 66 -8 14 -7 30 2 56 11 34 13 35 29 20 16
            -16 18 -16 39 5 l22 22 -42 43 -42 43 0 142 0 142 -30 0 -30 0 0 -112 0 -112
            -143 142 c-79 78 -148 142 -154 142 -6 0 -17 2 -25 5 -7 2 -26 -2 -43 -9z
            m110 -116 l59 -60 -134 0 -134 0 59 60 c33 33 66 60 75 60 9 0 42 -27 75 -60z
            m165 -165 l44 -45 -284 0 -284 0 44 45 44 45 196 0 196 0 44 -45z m86 -129
            c14 -55 6 -61 -89 -64 -66 -2 -93 1 -109 13 -31 21 -225 22 -254 0 -28 -21
            -190 -21 -198 1 -10 26 -7 62 7 67 6 3 153 6 324 6 l313 1 6 -24z m-236 -231
            l0 -135 -90 0 -90 0 0 135 0 135 90 0 90 0 0 -135z m-240 60 l0 -45 -84 0
            c-89 0 -96 4 -96 55 0 30 9 33 103 34 l77 1 0 -45z m476 21 c14 -55 6 -61 -89
            -64 l-87 -3 0 46 0 45 85 0 c81 0 85 -1 91 -24z m-476 -171 l0 -45 -84 0 c-89
            0 -96 4 -96 55 0 30 9 33 103 34 l77 1 0 -45z m476 21 c14 -55 6 -61 -89 -64
            l-87 -3 0 46 0 45 85 0 c81 0 85 -1 91 -24z"/>
            </g>
          </svg>
          <span className={type === 'cabins' ? 'type-name' : 'type-name type-name-grey'}>Cabins</span>
        </button>
        <button className={type === 'countryside' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('countryside')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'countryside' ? "#000000" : '#717171'} stroke="none">
            <path d="M180 874 c0 -35 -59 -94 -94 -94 -22 0 -26 -4 -26 -30 0 -26 4 -30
            28 -30 15 0 40 7 56 15 34 18 42 14 27 -13 -16 -31 -61 -62 -87 -62 -20 0 -24
            -5 -24 -30 0 -26 4 -30 28 -30 15 0 40 7 56 15 15 8 30 15 32 15 2 0 4 -20 4
            -44 l0 -44 -46 -7 c-67 -10 -74 -14 -74 -46 0 -27 2 -28 33 -21 70 16 219 7
            290 -17 37 -12 67 -26 67 -29 0 -4 -19 -18 -42 -31 -22 -13 -60 -41 -83 -62
            l-43 -39 -111 6 -111 7 0 -31 c0 -32 0 -32 53 -32 146 0 282 -36 509 -133 111
            -48 207 -77 252 -77 22 0 26 5 26 28 0 26 -3 28 -67 40 -38 7 -135 42 -218 77
            -82 34 -176 71 -208 81 l-58 18 23 19 c90 72 198 115 307 124 69 5 159 -5 204
            -22 14 -6 17 -2 17 24 0 19 -6 34 -15 37 -10 4 -15 21 -15 55 0 36 3 47 13 43
            7 -2 22 5 32 16 22 24 31 14 -112 128 -56 45 -106 82 -111 82 -6 0 -33 -18
            -61 -40 -28 -22 -53 -40 -56 -40 -3 0 -5 11 -5 25 0 21 -5 25 -30 25 -30 0
            -30 -1 -30 -52 0 -48 -3 -56 -32 -80 -32 -26 -32 -27 -14 -46 10 -12 24 -18
            32 -15 11 4 14 -6 14 -46 l0 -51 -37 18 c-51 26 -128 50 -185 58 l-48 6 0 44
            c0 48 3 50 40 29 14 -8 37 -14 53 -15 23 0 27 4 27 30 0 25 -4 30 -24 30 -26
            0 -71 31 -87 62 -15 28 -6 32 30 14 16 -9 41 -16 56 -16 21 0 25 5 25 30 0 26
            -4 30 -26 30 -35 0 -94 59 -94 94 0 22 -4 26 -30 26 -26 0 -30 -4 -30 -26z
            m570 -211 l60 -48 0 -70 0 -70 -45 3 -45 4 0 44 c0 42 -1 44 -30 44 -29 0 -30
            -2 -30 -44 0 -47 1 -46 -62 -60 l-28 -6 0 78 0 79 58 46 c31 25 58 46 60 47 1
            0 30 -21 62 -47z"/>
            </g>
          </svg>
          <span className={type === 'countryside' ? 'type-name' : 'type-name type-name-grey'}>Countryside</span>
        </button>
        <button className={type === 'desert' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('desert')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'desert' ? "#000000" : '#717171'} stroke="none">
            <path d="M408 939 c-67 -35 -78 -72 -78 -264 l0 -165 -30 0 -30 0 0 71 c0 67
            -2 73 -34 105 -48 48 -95 47 -143 -1 l-35 -35 4 -122 c3 -110 6 -127 26 -156
            36 -50 89 -72 172 -72 l70 0 0 -90 0 -90 -135 0 -135 0 0 -30 0 -30 420 0 420
            0 0 30 0 30 -135 0 -135 0 0 165 0 165 76 0 c60 0 85 5 116 22 61 35 78 77 78
            199 l0 101 -34 34 c-47 47 -95 47 -142 0 -31 -31 -34 -40 -34 -90 0 -56 0 -56
            -30 -56 l-30 0 0 93 c0 110 -17 150 -76 184 -48 28 -97 28 -146 2z m129 -63
            c27 -24 28 -28 33 -148 l5 -123 85 0 85 0 3 75 c3 75 15 100 48 100 33 0 44
            -31 44 -121 0 -87 -1 -92 -29 -120 -28 -28 -33 -29 -119 -29 -50 0 -97 -3
            -106 -6 -14 -5 -16 -32 -16 -195 l0 -189 -90 0 -89 0 -3 118 -3 117 -103 5
            c-102 5 -104 6 -133 38 -28 31 -29 36 -29 131 0 105 10 131 50 131 29 0 35
            -17 40 -115 l5 -90 85 0 85 0 5 198 5 199 28 24 c36 31 78 31 114 0z"/>
            </g>
          </svg>
          <span className={type === 'desert' ? 'type-name' : 'type-name type-name-grey'}>Desert</span>
        </button>
        <button className={type === 'lakefront' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('lakefront')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'lakefront' ? "#000000" : '#717171'} stroke="none">
            <path d="M720 880 c0 -50 -57 -110 -105 -110 -10 0 -15 -10 -15 -31 0 -31 1
            -31 38 -24 20 3 47 13 60 21 21 14 22 13 22 -14 0 -43 -34 -81 -81 -88 -35 -6
            -39 -10 -39 -35 0 -34 20 -37 83 -15 l37 14 0 -74 0 -74 -90 0 -90 0 0 128 0
            127 -101 85 c-114 97 -131 107 -158 94 -11 -5 -65 -47 -120 -94 l-101 -85 0
            -157 0 -158 420 0 420 0 0 30 0 30 -60 0 -60 0 0 74 0 74 38 -14 c62 -22 82
            -19 82 15 0 25 -4 29 -39 35 -47 7 -81 45 -81 88 0 27 1 28 23 14 12 -8 39
            -18 60 -21 36 -7 37 -7 37 24 0 21 -5 31 -15 31 -48 0 -105 60 -105 110 0 16
            -6 20 -30 20 -24 0 -30 -4 -30 -20z m-330 -127 l90 -77 0 -113 0 -113 -45 0
            -44 0 -3 88 -3 87 -65 3 c-110 5 -110 5 -110 -93 l0 -85 -45 0 -45 0 0 113 0
            113 88 76 c48 42 88 77 90 77 2 1 43 -34 92 -76z m-60 -243 l0 -60 -30 0 -30
            0 0 60 0 60 30 0 30 0 0 -60z"/>
            <path d="M126 305 c-20 -14 -43 -25 -51 -25 -10 0 -15 -10 -15 -30 0 -25 4
            -30 23 -30 12 0 39 11 59 25 20 14 46 25 58 25 12 0 38 -11 58 -25 26 -18 50
            -25 82 -25 32 0 56 7 82 25 20 14 46 25 58 25 12 0 38 -11 58 -25 26 -18 50
            -25 82 -25 32 0 56 7 82 25 46 31 70 31 116 0 20 -14 47 -25 59 -25 19 0 23 5
            23 30 0 20 -5 30 -15 30 -8 0 -31 11 -51 25 -48 33 -100 33 -148 0 -20 -14
            -50 -25 -66 -25 -16 0 -46 11 -66 25 -23 16 -51 25 -74 25 -23 0 -51 -9 -74
            -25 -20 -14 -50 -25 -66 -25 -16 0 -46 11 -66 25 -23 16 -51 25 -74 25 -23 0
            -51 -9 -74 -25z"/>
            <path d="M126 155 c-20 -14 -43 -25 -51 -25 -10 0 -15 -10 -15 -30 0 -25 4
            -30 23 -30 12 0 39 11 59 25 20 14 46 25 58 25 12 0 38 -11 58 -25 50 -34 114
            -34 164 0 20 14 46 25 58 25 12 0 38 -11 58 -25 26 -18 50 -25 82 -25 32 0 56
            7 82 25 46 31 70 31 116 0 20 -14 47 -25 59 -25 19 0 23 5 23 30 0 20 -5 30
            -15 30 -8 0 -31 11 -51 25 -48 33 -100 33 -148 0 -47 -32 -85 -32 -132 0 -48
            33 -100 33 -148 0 -20 -14 -50 -25 -66 -25 -16 0 -46 11 -66 25 -23 16 -51 25
            -74 25 -23 0 -51 -9 -74 -25z"/>
            </g>
          </svg>
          <span className={type === 'lakefront' ? 'type-name' : 'type-name type-name-grey'}>Lakefront</span>
        </button>
        <button className={type === 'tinyhomes' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('tinyhomes')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="97.000000pt" height="96.000000pt" viewBox="0 0 97.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'tinyhomes' ? "#000000" : '#717171'} stroke="none">
            <path d="M550 765 c-201 -101 -368 -184 -372 -184 -5 -1 -8 44 -8 99 l0 100
            -35 0 -35 0 0 -120 0 -120 -34 -17 c-31 -14 -33 -18 -23 -40 8 -19 16 -23 34
            -18 l23 5 0 -175 c0 -171 6 -208 34 -227 14 -10 708 -10 722 0 31 21 34 54 34
            427 l0 375 34 17 c31 14 33 18 24 39 -6 13 -16 24 -22 23 -6 0 -175 -83 -376
            -184z m270 -290 l0 -355 -85 0 -85 0 0 154 c0 140 -2 156 -21 180 -20 25 -23
            26 -134 26 -111 0 -114 -1 -134 -26 -19 -24 -21 -40 -21 -180 l0 -154 -85 0
            -85 0 0 195 0 195 318 159 c174 88 320 160 325 160 4 1 7 -159 7 -354z m-240
            -205 l0 -150 -85 0 -85 0 0 150 0 150 85 0 85 0 0 -150z"/>
            <path d="M714 646 c-9 -24 4 -48 23 -44 12 2 18 12 18 28 0 29 -32 41 -41 16z"/>
            </g>
          </svg>
          <span className={type === 'tinyhomes' ? 'type-name' : 'type-name type-name-grey'}>Tiny homes</span>
        </button>
        <button className={type === 'castles' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('castles')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'castles' ? "#000000" : '#717171'} stroke="none">
            <path d="M463 924 c-9 -4 -13 -38 -13 -119 l0 -112 -30 -6 c-27 -6 -30 -10
            -30 -47 0 -28 -4 -40 -14 -40 -10 0 -16 14 -18 43 l-3 42 -65 3 c-111 5 -110
            6 -110 -99 0 -84 2 -93 30 -134 l30 -43 2 -188 3 -189 235 0 235 0 3 189 2
            188 31 44 c29 42 30 47 27 136 l-3 93 -65 3 c-98 5 -110 -1 -110 -48 0 -28 -4
            -40 -14 -40 -10 0 -16 14 -18 43 -3 38 -6 42 -30 45 -23 3 -28 8 -28 32 l0 29
            73 3 72 3 0 85 0 85 -90 2 c-49 1 -96 -1 -102 -3z m137 -84 c0 -29 -2 -30 -45
            -30 -43 0 -45 1 -45 30 0 29 2 30 45 30 43 0 45 -1 45 -30z m-298 -252 l3 -43
            70 0 70 0 3 43 c3 39 5 42 32 42 27 0 29 -3 32 -42 l3 -43 70 0 70 0 3 43 c3
            39 5 42 33 42 29 0 29 -1 29 -56 0 -45 -5 -63 -30 -99 -16 -24 -30 -53 -30
            -64 0 -17 -6 -21 -30 -21 -27 0 -30 -3 -30 -30 0 -27 3 -30 30 -30 l30 0 0
            -120 0 -120 -30 0 -30 0 0 80 c0 77 -1 82 -34 118 -31 33 -39 37 -85 37 -44 0
            -55 -4 -83 -33 -31 -31 -33 -37 -37 -117 l-3 -85 -29 0 -29 0 0 171 0 170 -30
            44 c-25 36 -30 54 -30 99 0 55 0 56 29 56 28 0 30 -3 33 -42z m218 -338 c16
            -16 20 -33 20 -90 l0 -70 -60 0 -60 0 0 70 c0 76 19 110 60 110 11 0 29 -9 40
            -20z"/>
            <path d="M510 450 c0 -29 2 -30 45 -30 43 0 45 1 45 30 0 29 -2 30 -45 30 -43
            0 -45 -1 -45 -30z"/>
            </g>
          </svg>
          <span className={type === 'castles' ? 'type-name' : 'type-name type-name-grey'}>Castles</span>
        </button>
        <button className={type === 'containers' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('containers')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'containers' ? "#000000" : '#717171'} stroke="none">
            <path d="M13 803 c-10 -4 -13 -88 -13 -374 l0 -369 30 0 c27 0 30 3 30 30 l0
            30 420 0 420 0 0 -30 c0 -27 3 -30 30 -30 l30 0 -2 373 -3 372 -465 2 c-256 1
            -471 -1 -477 -4z m887 -338 l0 -285 -420 0 -420 0 0 285 0 285 420 0 420 0 0
            -285z"/>
            <path d="M150 465 l0 -225 30 0 30 0 0 225 0 225 -30 0 -30 0 0 -225z"/>
            <path d="M300 465 l0 -225 30 0 30 0 0 225 0 225 -30 0 -30 0 0 -225z"/>
            <path d="M450 465 l0 -225 30 0 30 0 0 225 0 225 -30 0 -30 0 0 -225z"/>
            <path d="M600 465 l0 -225 30 0 30 0 0 225 0 225 -30 0 -30 0 0 -225z"/>
            <path d="M750 465 l0 -225 30 0 30 0 0 225 0 225 -30 0 -30 0 0 -225z"/>
            </g>
          </svg>
          <span className={type === 'containers' ? 'type-name' : 'type-name type-name-grey'}>Containers</span>
        </button>
        <button className={type === 'camping' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('camping')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'camping' ? "#000000" : '#717171'} stroke="none">
            <path d="M600 880 c0 -50 -57 -110 -105 -110 -10 0 -15 -10 -15 -31 0 -31 1
            -31 38 -24 20 3 47 13 60 21 21 14 22 13 22 -14 0 -43 -34 -81 -81 -88 -35 -6
            -39 -10 -39 -35 0 -34 20 -37 83 -15 l37 14 0 -44 0 -44 -167 0 c-93 0 -173
            -4 -179 -8 -17 -12 -219 -395 -219 -417 0 -20 7 -20 445 -20 406 0 445 1 448
            17 2 9 -46 108 -107 220 -95 176 -113 203 -135 206 -23 3 -26 8 -26 46 l0 44
            38 -14 c62 -22 82 -19 82 15 0 25 -4 29 -39 35 -47 7 -81 45 -81 88 0 27 1 28
            23 14 12 -8 39 -18 60 -21 36 -7 37 -7 37 24 0 21 -5 31 -15 31 -48 0 -105 60
            -105 110 0 16 -6 20 -30 20 -24 0 -30 -4 -30 -20z m160 -595 l87 -160 -171 -3
            c-199 -3 -169 -20 -258 148 -33 63 -69 130 -80 148 l-20 32 178 -2 178 -3 86
            -160z m-524 -162 c-2 -2 -31 -3 -64 -1 l-60 3 62 113 61 113 3 -112 c1 -61 1
            -114 -2 -116z m151 75 l42 -78 -64 0 -65 0 0 118 0 117 23 -40 c13 -22 42 -75
            64 -117z"/>
            <path d="M195 831 c-36 -16 -67 -58 -72 -99 -17 -128 166 -183 222 -66 24 52
            19 90 -18 130 -34 37 -92 53 -132 35z m85 -71 c11 -11 20 -28 20 -38 0 -29
            -29 -62 -56 -62 -29 0 -64 32 -64 60 0 11 9 29 20 40 11 11 29 20 40 20 11 0
            29 -9 40 -20z"/>
            </g>
          </svg>
          <span className={type === 'camping' ? 'type-name' : 'type-name type-name-grey'}>Camping</span>
        </button>
        <button className={type === 'skiing' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('skiing')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'skiing' ? "#000000" : '#717171'} stroke="none">
            <path d="M571 908 c-5 -13 -21 -52 -35 -88 l-26 -65 2 -360 3 -360 85 0 85 0
            3 360 2 361 -34 84 c-26 65 -39 86 -55 88 -14 2 -24 -4 -30 -20z m47 -131 c7
            -18 12 -79 12 -135 l0 -102 -30 0 -30 0 0 102 c0 91 14 168 30 168 3 0 11 -15
            18 -33z m12 -342 c0 -43 -1 -45 -30 -45 -29 0 -30 2 -30 45 0 43 1 45 30 45
            29 0 30 -2 30 -45z m0 -225 l0 -120 -30 0 -30 0 0 120 0 120 30 0 30 0 0 -120z"/>
            <path d="M811 908 c-5 -13 -21 -52 -35 -88 l-26 -65 2 -360 3 -360 85 0 85 0
            3 360 2 361 -34 84 c-26 65 -39 86 -55 88 -14 2 -24 -4 -30 -20z m47 -131 c7
            -18 12 -79 12 -135 l0 -102 -30 0 -30 0 0 102 c0 91 14 168 30 168 3 0 11 -15
            18 -33z m12 -342 c0 -43 -1 -45 -30 -45 -29 0 -30 2 -30 45 0 43 1 45 30 45
            29 0 30 -2 30 -45z m0 -225 l0 -120 -30 0 -30 0 0 120 0 120 30 0 30 0 0 -120z"/>
            <path d="M285 848 c-2 -7 -13 -49 -25 -93 -11 -44 -23 -87 -26 -95 -3 -9 -23
            28 -46 88 -36 93 -42 102 -61 96 -12 -3 -25 -9 -28 -13 -4 -3 18 -70 48 -148
            l56 -143 -45 -167 -45 -168 -30 2 c-24 2 -32 -2 -37 -20 -9 -33 -8 -34 19 -41
            27 -7 30 -15 16 -63 -8 -28 -7 -32 15 -37 33 -9 41 -3 48 39 6 32 10 35 39 32
            28 -2 32 1 35 24 3 22 -2 28 -23 33 -15 4 -25 12 -23 19 3 7 18 63 34 125 15
            61 31 112 34 112 3 0 25 -52 49 -116 45 -117 45 -123 8 -137 -5 -1 -3 -15 4
            -29 9 -22 15 -25 30 -18 25 14 25 15 43 -35 10 -25 19 -45 21 -45 2 0 15 4 29
            10 l25 9 -17 47 c-10 29 -13 49 -7 51 32 11 36 20 24 46 -10 22 -15 24 -31 16
            -11 -6 -22 -8 -25 -6 -2 3 -31 74 -64 159 -68 172 -67 152 -16 340 35 126 35
            126 13 132 -31 8 -36 7 -41 -6z"/>
            </g>
          </svg>
          <span className={type === 'skiing' ? 'type-name' : 'type-name type-name-grey'}>Skiing</span>
        </button>
        <button className={type === 'islands' ? 'type-button type-button-black' : 'type-button'} onClick={() => changeType('islands')}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet" className='type-icon'>

            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={type === 'islands' ? "#000000" : '#717171'} stroke="none">
            <path d="M138 879 c-23 -12 -46 -35 -58 -59 -28 -55 -26 -70 10 -70 21 0 30 5
            30 16 0 8 13 29 29 45 34 34 77 38 111 11 l23 -18 -31 -13 c-39 -16 -67 -47
            -87 -93 -22 -55 -20 -68 14 -68 24 0 31 5 36 29 3 15 19 41 35 56 l29 27 -6
            -74 c-5 -67 6 -130 33 -194 3 -6 -9 -17 -26 -24 -45 -19 -105 -92 -120 -147
            -16 -58 -26 -73 -51 -73 -15 0 -19 -7 -19 -34 0 -34 1 -34 31 -26 17 5 42 16
            55 25 32 20 56 19 99 -6 46 -28 104 -28 150 0 45 26 65 26 110 0 46 -28 104
            -28 150 0 43 25 67 26 99 6 13 -9 38 -20 55 -25 30 -8 31 -8 31 26 0 27 -4 34
            -19 34 -23 0 -33 13 -55 72 -30 81 -107 126 -193 114 -37 -5 -50 -2 -76 18
            -37 27 -89 46 -127 46 -23 0 -31 7 -49 49 -34 80 -22 228 17 214 30 -11 71
            -55 77 -84 5 -24 12 -29 36 -29 34 0 36 13 14 68 -20 46 -48 77 -87 93 l-31
            13 23 18 c34 27 77 23 111 -11 16 -16 29 -37 29 -45 0 -11 9 -16 31 -16 30 0
            31 2 26 30 -9 45 -36 79 -78 101 -51 25 -95 24 -146 -6 l-43 -24 -42 24 c-52
            30 -100 31 -150 4z m328 -478 c22 -10 50 -30 61 -45 20 -25 21 -25 53 -10 20
            11 44 14 67 11 57 -10 124 -87 76 -87 -10 0 -33 -9 -51 -20 -41 -25 -83 -25
            -124 0 -18 11 -49 20 -68 20 -19 0 -50 -9 -68 -20 -18 -11 -46 -20 -62 -20
            -16 0 -44 9 -62 20 -18 11 -43 20 -56 20 -22 0 -22 1 -7 37 21 50 42 72 90 94
            51 24 99 24 151 0z"/>
            <path d="M152 100 c-18 -11 -39 -20 -47 -20 -10 0 -15 -11 -15 -34 0 -34 1
            -34 31 -26 17 5 42 16 55 25 32 20 56 19 99 -6 46 -28 104 -28 150 0 20 11 45
            21 55 21 10 0 35 -10 55 -21 46 -28 104 -28 150 0 43 25 67 26 99 6 13 -9 38
            -20 55 -25 30 -8 31 -8 31 26 0 23 -5 34 -15 34 -8 0 -29 9 -47 20 -42 25 -94
            25 -136 0 -41 -25 -83 -25 -124 0 -42 25 -94 25 -136 0 -18 -11 -46 -20 -62
            -20 -16 0 -44 9 -62 20 -42 25 -94 25 -136 0z"/>
            </g>
          </svg>
          <span className={type === 'islands' ? 'type-name' : 'type-name type-name-grey'}>Islands</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className='entire-header'>
    <div className={url === '/' ? 'navbar-container-set' : 'navbar-container'}>
      <div className={url === '/' ? 'navbar-inner-home navbar-home' : 'navbar-inner navbar-else'}>
      <div className='navbar-logo-side'>
        <NavLink className='logo' exact to="/">
          <div className='logo-container'>
            <img src={url.includes('new') || url.includes('update') ? pear : logo} alt='logo' id='navbar-logo' />
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
          {url.includes('new') || url.includes('update') ? null : <button className='host-button' onClick={handleHost}>
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
                <img src={user ? user.profile_pic : pearout} alt='user' className='user-image' />
              </div>
            </div>
          </button>
          {user && (
            <div className={showMenu ? "profile-dropdown visible-dropdown logged-in-dropdown" : "profile-dropdown invisible-dropdown logged-in-dropdown"}>
              <div>
                <NavLink id='listings-button' className='dropdown-text' to='/listings/current'>
                  <button className='user-dropdown-buttons'>
                    <span className='user-button-inner-span'>
                      Listings
                    </span>
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink id='listings-button' className='dropdown-text' to='/reviews/current'>
                  <button className='user-dropdown-buttons'>
                    <span className='user-button-inner-span'>
                    Reviews
                    </span>
                  </button>
                </NavLink>
              </div>
              <div>
                  <button className='user-dropdown-buttons' onClick={onLogout}>
                    <span className='user-button-inner-span logout-button'>
                    Log out
                    </span>
                  </button>
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
