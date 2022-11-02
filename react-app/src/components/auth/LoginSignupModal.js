import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom';
import { signUp, login } from '../../store/session';
import { Modal } from '../../context/Modal';
import './LoginSignupModal.css';

const LoginSignupModal = () => {
    const dispatch = useDispatch();
    const url = useLocation().pathname;
    const [errors, setErrors] = useState([]);
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLogModal, setShowLogModal] = useState(false);
    const [showSignModal, setShowSignModal] = useState(false);

    console.log('this is the showLogModal boolean:', showLogModal);

    const emailTest = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrors([]);
        let errs = [];
        if (first_name.length < 2) errs.push('First name must be at least 2 characters.');
        if (last_name.length < 2) errs.push('Last name must be at least 2 characters.');
        if (!emailTest.test(email)) errs.push('Please enter a valid email.');
        if (password.length < 5) errs.push('Password must be at least 6 characters.');
        if (errs.length > 0) setErrors(errs);
        else {
            return dispatch(signUp(first_name, last_name, email, password)).catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
              });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(login(email, password )).catch(async (res) => {
            const data = await res.json();
            if (data && data.message) setErrors(data.message);
        })
    };

    const demoLogin = () => {
        return dispatch(login('demo@user.io', 'password')).catch(
          async (res) => {
            const data = await res.json();
          }
        )
      }

    return (
        <>
            <button className='login-button-dropdown'
                onClick={() => {
                    setShowLogModal(true)
                    // setShowSignModal(false)
            }}>
                <span className='login-span-dropdown'>
                    Log in
                </span>
            </button>
            <button className='signup-button-dropdown'
                onClick={() => {
                    setShowSignModal(true)
                    setShowLogModal(false)
            }}>
                <span className='signup-span-dropdown'>
                    Sign up
                </span>
            </button>
            <button className='demo-button-dropdown'
                onClick={demoLogin}>
                <span className='demo-span-dropdown'>
                    Demo User Login
                </span>
            </button>
            {showLogModal && (
                <Modal id='border-modal'
                onClose={() => {
                    setShowLogModal(false);
                }}
                >
                    <div className='modal-body'>
                        <h1 id='modal-header'>Welcome to Pearbnb</h1>
                        <form id='login-form' onSubmit={handleLogin}>
                            <div className='input-container login-container'>
                                <span className='login-input-title'>Email</span>
                                <input
                                    id='form-email'
                                    type='text'
                                    value={email}
                                    required
                                    className='login-form-field'
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>
                            <div className='input-container login-container'>
                                <span className='login-input-title'>Password</span>
                                <input
                                    id='form-password'
                                    type='password'
                                    value={password}
                                    required
                                    className='login-form-field'
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                            </div>
                            <div className='login-button-section'>
                                <button type='submit' id='login-button'>Log in</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default LoginSignupModal;
