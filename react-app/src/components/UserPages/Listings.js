import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import updateList from '../../icons/listing/update.svg';
import deleteList from '../../icons/listing/delete.svg';
import './UserPages.css';
import { Modal } from '../../context/Modal';
import { useHistory } from 'react-router-dom';
import { deleteListing, loadUsersListings } from '../../store/listings';
import star from '../../icons/homepage/cardstar.svg';

const Listings = () => {
    const user = useSelector(state => state.session.user);
    const listObj = useSelector(state => state.listings.allListings);
    const listings = Object.values(listObj);

    const dispatch = useDispatch();
    const history = useHistory();
    const [ listId, setListId ] = useState(null);
    const [ showDeleteModal, setShowDeleteModal ] = useState(false);

    const handleDeleteButton = (id) => {
        setListId(id);
        setShowDeleteModal(true);
    };

    const handleDelete = async () => {
        const res = await dispatch(deleteListing(listId));

        if (res) {
            setListId(null);
            setShowDeleteModal(false);
        }
    }

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
                    <NavLink to={`/listings/${list.id}`} >
                    <div className='indiv-listing-image'>
                        <img src={list.images[0]} alt='listing' id='indiv-listing-pictures' />
                    </div></NavLink>
                    <div className='indiv-listing-body'>
                        <NavLink to={`/listings/${list.id}`} >
                        <div className='indiv-listing-top'>
                            <div className='indiv-listing-header'>
                                    <h1 className='listing-title-user'>{list.name}</h1>
                                <div className='indiv-review-header'>
                                    <img className='indiv-rev-star' src={star} alt='star' />
                                    <span className='indiv-avg-rev'>{list.avg_rating.toFixed(1)}</span>
                                </div>
                            </div>
                            <div className='indiv-listing-rooms-such'>
                                <span className='bed-bath-span'>{list.max_guests} guests</span>
                                <span id='middot'>&middot;</span>
                                <span className='bed-bath-span'>{list.bed} {list.bed > 1 ? 'beds' : 'bed'}</span>
                                <span id='middot'>&middot;</span>
                                <span className='bed-bath-span'>{list.bath} {list.bath > 1 ? 'baths' : 'bath'}</span>
                            </div>
                            <div className='indiv-listing-description'>
                                {list.description}
                            </div>
                        </div>
                        </NavLink>
                        <div className='indiv-listing-buttons'>
                            <button className='user-listing-buttons' id='edit-listing-button' onClick={() => history.push(`/listings/${list.id}/update`)}>
                                <img src={updateList} alt='update' id='change-listing-image' />
                            </button>
                            <button className='user-listing-buttons' id='delete-listing-button' onClick={() => handleDeleteButton(list.id)}>
                                <img src={deleteList} alt='delete' id='change-listing-image' />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {showDeleteModal && (
                <Modal id='border-modal'
                onClose={() => {
                    setShowDeleteModal(false);
                }}
                >
                    <div className='delete-modal-interior'>
                        <h1 id='delete-modal-header'>Confirm delete</h1>
                        <div className='modal-body-delete'>
                            Are you sure you want to delete this listing? <br />This process cannot be undone.
                        </div>
                        <div className='delete-listing-buttons'>
                            <button className='user-delete-buttons' id='delete-indiv-listing-button' onClick={handleDelete}>
                                Delete
                            </button>
                            <button className='user-delete-buttons' id='cancel-indiv-listing-button' onClick={() => setShowDeleteModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>)}
    </div>
  )
}

export default Listings;
