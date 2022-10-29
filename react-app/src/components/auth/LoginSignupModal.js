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
        return dispatch(login({ email, password })).catch(async (res) => {
            const data = await res.json();
            if (data && data.message) setErrors(data.message);
        })
    };

    return (
        <>
            <button className='login-button-dropdown'
                onClick={() => {
                    setShowLogModal(true)
                    setShowSignModal(false)
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
            {showLogModal && (
                <Modal id='border-modal' onClose={() => {
                    // console.log('on close')
                    setShowLogModal(false);
                }}>
                    <div id="two-cols">
                        <div id='left-side'>
                            <div id="login-text">
                                <h2 id="login-title">Log in to Squeal</h2>
                                <h5 id="signup-redirect">
                                    <div className='text'>New to Squeal? </div>
                                    <div className='button' onClick={() => {
                                        setShowSignModal(true)
                                        setShowLogModal(false)
                                }}>
                                    Sign up
                                </div>
                                </h5>
                                <p id="terms">By logging in, you agree to Squeal's Terms of Service and Privacy Policy.</p>

                            </div>
                            <form id='login-form' onSubmit={handleLogin}>

                                <button
                                    id='demo-button'
                                    type='submit'
                                    onClick={() => {
                                        setEmail('kermitfrog@user.io')
                                        setPassword('password')
                                    }}
                                >
                                    Continue with DemoUser
                                </button>

                                <div id='lines'><span className='or'>OR</span></div>

                                {showLogModal && errors.length > 0 && (
                                    <div id='modal-errors-box'>
                                        {errors.map((error, ind) => (
                                            <div id='modal-errors' key={ind}>{error}</div>
                                        ))}
                                    </div>
                                )}
                                <div>
                                    <input
                                        id='login-input'

                                        name='email'
                                        type='email'
                                        placeholder='Email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <input
                                        id='login-input'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        required={true}
                                    />
                                </div>
                                <button id='login-button' type='submit'>Log In</button>
                            </form>
                            <div id='login-fineprint'>
                                <p id='fineprint-text'>New to Squeal?</p>
                                <div id='fineprint-link' onClick={() => {
                                    setShowSignModal(true)
                                    setShowLogModal(false)
                                }}>
                                    Sign up
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default LoginSignupModal;
