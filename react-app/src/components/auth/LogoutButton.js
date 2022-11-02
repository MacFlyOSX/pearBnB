import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './LoginSignupModal.css';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className='logout-button-dropdown' onClick={onLogout}>
      <span className='login-span-dropdown'>
        Logout
      </span>
    </button>;
};

export default LogoutButton;
