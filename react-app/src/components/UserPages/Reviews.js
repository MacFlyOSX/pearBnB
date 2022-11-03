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
  const [ emptyList, setEmptyList ] = useState(false);

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
    if (!Object.keys(reviewObj).length) setEmptyList(true);
  }, [dispatch, reviewObj])

  if (emptyList) {
    return (
        <div className='user-listings-container'>
            <div className='user-listings-inner'>
                <h1 className='user-sad-title'>
                    Hey {user.first_name}! You currently do not have any reviews.
                </h1>
                <div className='get-started-listings'>
                    <svg className='user-arrow' id='left-arrow' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 371.412 371.412">
                        <g>
                      <path d="M333.068,161.691c-52.021-52.632-94.86-113.832-153-159.732c-3.672-3.06-7.956-2.448-11.016,1.224
                    c-42.84,56.304-85.068,112.608-130.968,165.852c-1.836,2.448-1.836,4.896-0.612,6.732c-3.06,3.672,0,11.016,6.12,9.792
                    c28.152-4.284,56.304,3.06,85.068,1.836c-7.956,34.884-28.152,66.708-42.84,99.144c-6.12,13.465-25.092,48.348-15.3,65.484
                    c-2.448,3.061-0.612,9.18,4.284,9.791c44.064,1.836,87.516,7.957,130.968,9.182c22.644,0.611,77.111,3.672,87.516-23.256
                    c1.224-2.449-0.612-4.896-2.448-6.121c1.836-1.225,3.061-3.061,3.061-4.896c-2.448-22.031-17.748-44.062-26.929-64.26
                    c-12.239-28.152-24.479-58.139-27.54-89.352c28.765,3.672,59.364,4.896,88.129,0.612c6.731-0.612,8.567-8.568,5.508-12.24
                    C335.517,169.647,336.128,165.363,333.068,161.691z M234.536,171.483c-4.896,0.612-6.12,4.896-4.896,7.956
                    c-4.284,28.764,6.119,56.916,15.911,83.844c9.181,24.48,19.584,58.141,37.332,77.725l0.612,0.611
                    c-11.016,4.283-20.808,9.793-33.66,11.629c-22.032,3.672-44.676,2.447-66.708,1.223c-31.824-1.223-65.484-7.344-98.532-4.283
                    c1.224-8.568,1.224-17.137,3.672-25.705c5.508-19.584,15.3-37.943,23.868-56.303c11.628-26.316,24.48-53.244,27.54-82.008
                    c4.896-4.285,3.06-13.464-4.284-12.853c-28.152,1.836-56.304-3.672-84.456-0.612c45.9-47.736,85.068-102.204,125.46-155.448
                    c54.468,44.676,95.472,102.204,144.432,153C292.064,171.483,262.688,168.423,234.536,171.483z"/>
                        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                    <button id='list-your-review' onClick={() => history.push('/')}>Let's explore pearbnb</button>
                    <svg className='user-arrow' id='right-arrow' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 371.412 371.412">
                        <g>
                      <path d="M333.068,161.691c-52.021-52.632-94.86-113.832-153-159.732c-3.672-3.06-7.956-2.448-11.016,1.224
                    c-42.84,56.304-85.068,112.608-130.968,165.852c-1.836,2.448-1.836,4.896-0.612,6.732c-3.06,3.672,0,11.016,6.12,9.792
                    c28.152-4.284,56.304,3.06,85.068,1.836c-7.956,34.884-28.152,66.708-42.84,99.144c-6.12,13.465-25.092,48.348-15.3,65.484
                    c-2.448,3.061-0.612,9.18,4.284,9.791c44.064,1.836,87.516,7.957,130.968,9.182c22.644,0.611,77.111,3.672,87.516-23.256
                    c1.224-2.449-0.612-4.896-2.448-6.121c1.836-1.225,3.061-3.061,3.061-4.896c-2.448-22.031-17.748-44.062-26.929-64.26
                    c-12.239-28.152-24.479-58.139-27.54-89.352c28.765,3.672,59.364,4.896,88.129,0.612c6.731-0.612,8.567-8.568,5.508-12.24
                    C335.517,169.647,336.128,165.363,333.068,161.691z M234.536,171.483c-4.896,0.612-6.12,4.896-4.896,7.956
                    c-4.284,28.764,6.119,56.916,15.911,83.844c9.181,24.48,19.584,58.141,37.332,77.725l0.612,0.611
                    c-11.016,4.283-20.808,9.793-33.66,11.629c-22.032,3.672-44.676,2.447-66.708,1.223c-31.824-1.223-65.484-7.344-98.532-4.283
                    c1.224-8.568,1.224-17.137,3.672-25.705c5.508-19.584,15.3-37.943,23.868-56.303c11.628-26.316,24.48-53.244,27.54-82.008
                    c4.896-4.285,3.06-13.464-4.284-12.853c-28.152,1.836-56.304-3.672-84.456-0.612c45.9-47.736,85.068-102.204,125.46-155.448
                    c54.468,44.676,95.472,102.204,144.432,153C292.064,171.483,262.688,168.423,234.536,171.483z"/>
                        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

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
