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
    const [ firstChar, setFirstChar ] = useState(0);
    const [ lastChar, setLastChar ] = useState(0);
    const [ emailChar, setEmailChar ] = useState(0);

    console.log('these are your errors:', errors);

    const emailTest = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrors([]);
        let errs = [];
        if (first_name.length < 2) errs.push('fname');
        if (last_name.length < 2) errs.push('lname');
        if (!emailTest.test(email)) errs.push('email');
        if (password.length < 5) errs.push('password');
        if (errs.length > 0) return setErrors(errs.join(''));
        else {
            setErrors([]);
            const data = await dispatch(signUp(first_name, last_name, email, password));
            if (data) setErrors(data.email);
            console.log('this is your data: ', data);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrors([]);
        const data = await dispatch(login(email, password ));
        console.log('this is your data:',data);
        if (data) setErrors(data.join(''));
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
                    setEmail('');
                    setPassword('');
                    setErrors('');
                }}
                >
                    <div className='modal-body'>
                        <h1 id='modal-header'>Welcome to Pearbnb</h1>
                        <form id='login-form' onSubmit={handleLogin}>
                            <div className='input-container login-container'>
                                <span className='login-input-title'>Email</span>
                                {errors.includes('email') ? <span className='login-input-error'>Account not found</span> : null}
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
                                {errors.includes('password') ? <span className='login-input-error'>Invalid password</span> : null}
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
            {showSignModal && (
                <Modal id='border-modal'
                onClose={() => {
                    setShowSignModal(false);
                    setEmail('');
                    setPassword('');
                    setFirstname('');
                    setLastname('');
                    setErrors('');
                }}
                >
                    <div className='signup-modal-body'>
                        <h1 id='modal-header'>Welcome to Pearbnb</h1>
                        <form id='login-form' onSubmit={handleSignUp}>
                            <div className='input-container login-container'>
                                <span className='login-input-title'>First name</span>
                                {errors.includes('fname') ? <span className='login-input-error'>Must be at least 2 characters</span> : null}
                                <input
                                    id='form-fname'
                                    type='text'
                                    value={first_name}
                                    required
                                    maxLength='100'
                                    className='login-form-field'
                                    onChange={(e) => setFirstname(e.target.value)}
                                    />
                            </div>
                            <div className='input-container login-container'>
                                <span className='login-input-title'>Last name</span>
                                {errors.includes('lname') ? <span className='login-input-error'>Must be at least 2 characters</span> : null}
                                <input
                                    id='form-lname'
                                    type='text'
                                    value={last_name}
                                    required
                                    maxLength='100'
                                    className='login-form-field'
                                    onChange={(e) => setLastname(e.target.value)}
                                    />
                            </div>
                            <div className='input-container login-container'>
                                <span className='login-input-title'>Email</span>
                                {errors.includes('Invalid') ? <span className='login-input-error'>Account already exists for this email</span> : errors.includes('email') ? <span className='login-input-error'>Must be a valid email</span> : null}
                                <input
                                    id='form-email'
                                    type='text'
                                    value={email}
                                    required
                                    maxLength='255'
                                    className='login-form-field'
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>
                            <div className='input-container login-container'>
                                <span className='login-input-title'>Password</span>
                                {errors.includes('password') ? <span className='login-input-error'>Must be at least 6 characters</span> : null}
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
                                <button type='submit' id='login-button'>Sign up</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default LoginSignupModal;
