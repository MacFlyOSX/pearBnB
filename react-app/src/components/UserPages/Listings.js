import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserPages.css';
import { Modal } from '../../context/Modal';
import { useHistory } from 'react-router-dom';
import { loadUsersListings } from '../../store/listings';
import star from '../../icons/homepage/cardstar.svg';

const Listings = () => {
    const user = useSelector(state => state.session.user);
    const listObj = useSelector(state => state.listings.allListings);
    const listings = Object.values(listObj);

    const dispatch = useDispatch();
    const history = useHistory();
    const [ listId, setListId ] = useState(null);
    const [ showDeleteModal, setShowDeleteModal ] = useState(false);

    useEffect(() => {
        dispatch(loadUsersListings());
    }, [dispatch])

    if (!user) history.push('/');

  return (
    <div className='user-listings-container'>
        <div className='user-listings-inner'>
            <h1 className='user-listings-title'>Hey {user.first_name}! Here are your listings:</h1>
            {listings.map((list, i) => (
                <div key={i} className='indiv-listing-container'>
                <div className='indiv-listing-header'>
                    <h1 className='listing-title-user'>{list.name}</h1>
                    <div className='indiv-review-header'>
                        <img className='indiv-rev-star' src={star} alt='star' />
                        <span className='indiv-avg-rev'>{list.avg_rating.toFixed(1)}</span>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Listings;
