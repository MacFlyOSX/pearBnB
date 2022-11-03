import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import updateList from '../../icons/listing/update.svg';
import deleteList from '../../icons/listing/delete.svg';
import './UserPages.css';
import { Modal } from '../../context/Modal';
import { useHistory } from 'react-router-dom';
import { loadUsersReviews, deleteReview } from '../../store/reviews';

const Reviews = () => {
  const user = useSelector(state => state.session.user);
  const reviewObj = useSelector(state => state.reviews.allReviews);
  const reviews = Object.values(reviewObj);

  const dispatch = useDispatch();
  const history = useHistory();
  const [ revId, setRevId ] = useState(null);
  const [ showDelModal, setShowDelModal ] = useState(false);

  const handleDeleteButton = (id) => {
    setRevId(id);
    setShowDelModal(true);
  };

  const handleDelete = async () => {
    const res = await dispatch(deleteReview(revId));

    if (res) {
        setRevId(null);
        setShowDelModal(false);
    }
  };

  if (!user) history.push('/');

  useEffect(() => {
    dispatch(loadUsersReviews());
  })

  return (
    <div className='user-listings-container'>
        <div className='user-listings-inner'>
          <h1 className='user-listings-title'>Hey {user?.first_name}! Here are your reviews:</h1>
          {reviews.map((review, i) => (
            <div className='indiv-review-container' key={i}>
            <h1 className='indiv-review-header-title'>{review?.listing?.name}</h1>
            <div className='container-for-indiv-reviews'>
            <div className='indiv-review-breakdown-section'>
                <div className='review-specific-review-stat'>
                    <div className='review-specific-stat-title'>Cleanliness</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg className={review.clean > 4 ? 'green-machine' : review.clean > 3 ? 'green-goblin' : review.clean > 2 ? 'green-bean' : review.clean > 1 ? 'lima-bean' : review.clean > 0 ? 'edamame' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg className={review.clean > 4 ? 'green-machine' : review.clean > 3 ? 'green-goblin' : review.clean > 2 ? 'green-bean' : review.clean > 1 ? 'lima-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg className={review.clean > 4 ? 'green-machine' : review.clean > 3 ? 'green-goblin' : review.clean > 2 ? 'green-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg className={review.clean > 4 ? 'green-machine' : review.clean > 3 ? 'green-goblin' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg className={review.clean > 4 ? 'green-machine' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='review-specific-stat-title'>Accuracy</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg className={review.acc > 4 ? 'green-machine' : review.acc > 3 ? 'green-goblin' : review.acc > 2 ? 'green-bean' : review.acc > 1 ? 'lima-bean' : review.acc > 0 ? 'edamame' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg className={review.acc > 4 ? 'green-machine' : review.acc > 3 ? 'green-goblin' : review.acc > 2 ? 'green-bean' : review.acc > 1 ? 'lima-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg className={review.acc > 4 ? 'green-machine' : review.acc > 3 ? 'green-goblin' : review.acc > 2 ? 'green-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg className={review.acc > 4 ? 'green-machine' : review.acc > 3 ? 'green-goblin' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg className={review.acc > 4 ? 'green-machine' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='review-specific-stat-title'>Communication</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg className={review.comm > 4 ? 'green-machine' : review.comm > 3 ? 'green-goblin' : review.comm > 2 ? 'green-bean' : review.comm > 1 ? 'lima-bean' : review.comm > 0 ? 'edamame' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg className={review.comm > 4 ? 'green-machine' : review.comm > 3 ? 'green-goblin' : review.comm > 2 ? 'green-bean' : review.comm > 1 ? 'lima-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg className={review.comm > 4 ? 'green-machine' : review.comm > 3 ? 'green-goblin' : review.comm > 2 ? 'green-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg className={review.comm > 4 ? 'green-machine' : review.comm > 3 ? 'green-goblin' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg className={review.comm > 4 ? 'green-machine' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='review-specific-stat-title'>Location</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg className={review.loc > 4 ? 'green-machine' : review.loc > 3 ? 'green-goblin' : review.loc > 2 ? 'green-bean' : review.loc > 1 ? 'lima-bean' : review.loc > 0 ? 'edamame' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg className={review.loc > 4 ? 'green-machine' : review.loc > 3 ? 'green-goblin' : review.loc > 2 ? 'green-bean' : review.loc > 1 ? 'lima-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg className={review.loc > 4 ? 'green-machine' : review.loc > 3 ? 'green-goblin' : review.loc > 2 ? 'green-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg className={review.loc > 4 ? 'green-machine' : review.loc > 3 ? 'green-goblin' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg className={review.loc > 4 ? 'green-machine' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='review-specific-stat-title'>Check-in</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg className={review.check > 4 ? 'green-machine' : review.check > 3 ? 'green-goblin' : review.check > 2 ? 'green-bean' : review.check > 1 ? 'lima-bean' : review.check > 0 ? 'edamame' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg className={review.check > 4 ? 'green-machine' : review.check > 3 ? 'green-goblin' : review.check > 2 ? 'green-bean' : review.check > 1 ? 'lima-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg className={review.check > 4 ? 'green-machine' : review.check > 3 ? 'green-goblin' : review.check > 2 ? 'green-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg className={review.check > 4 ? 'green-machine' : review.check > 3 ? 'green-goblin' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg className={review.check > 4 ? 'green-machine' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='review-specific-stat-title'>Value</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg className={review.val > 4 ? 'green-machine' : review.val > 3 ? 'green-goblin' : review.val > 2 ? 'green-bean' : review.val > 1 ? 'lima-bean' : review.val > 0 ? 'edamame' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg className={review.val > 4 ? 'green-machine' : review.val > 3 ? 'green-goblin' : review.val > 2 ? 'green-bean' : review.val > 1 ? 'lima-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg className={review.val > 4 ? 'green-machine' : review.val > 3 ? 'green-goblin' : review.val > 2 ? 'green-bean' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg className={review.val > 4 ? 'green-machine' : review.val > 3 ? 'green-goblin' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg className={review.val > 4 ? 'green-machine' : 'grey-bean'}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='container-for-review-body'>
              {review.review_body}
            </div>
            <div className='indiv-listing-buttons'>
                            <button className='user-listing-buttons' id='edit-listing-button'
                            onClick={() => history.push(`/reviews/${review.id}/update`)}
                            >
                                <img src={updateList} alt='update' id='change-listing-image' />
                            </button>
                            <button className='user-listing-buttons' id='delete-listing-button'
                            onClick={() => handleDeleteButton(review.id)}
                            >
                                <img src={deleteList} alt='delete' id='change-listing-image' />
                            </button>
                        </div>
            </div>
          ))}
        </div>
        {showDelModal && (
                <Modal id='border-modal'
                onClose={() => {
                    setShowDelModal(false);
                }}
                >
                    <div className='delete-modal-interior'>
                        <h1 id='delete-modal-header'>Confirm delete</h1>
                        <div className='modal-body-delete'>
                            Are you sure you want to delete this review? <br />This process cannot be undone.
                        </div>
                        <div className='delete-listing-buttons'>
                            <button className='user-delete-buttons' id='delete-indiv-listing-button' onClick={handleDelete}>
                                Delete
                            </button>
                            <button className='user-delete-buttons' id='cancel-indiv-listing-button' onClick={() => setShowDelModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>)}
    </div>
  )
}

export default Reviews;
