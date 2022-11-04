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

    if (!Object.keys(listObj).length) {
        return (
            <div className='user-listings-container'>
                <div className='user-listings-inner'>
                    <h1 className='user-sad-title'>
                        Hey {user.first_name}!
                        <br />
                        You currently do not have any listings.
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
                        <button id='list-your-place' onClick={() => history.push('/listings/new')}>List your first place</button>
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
            <h1 className='user-listings-title'>Hey {user.first_name}! Here are your listings:</h1>
            {listings.map((list, i) => (
                <div key={i} className='indiv-listing-container'>
                    <NavLink to={`/listings/${list.id}`} >
                    <div className='indiv-listing-image'>
                        <img src={list?.images?.[0]} alt='listing' id='indiv-listing-pictures' onError={e => e.currentTarget.src = 'https://i.imgur.com/DsVjt4A.png'} />
                    </div></NavLink>
                    <div className='indiv-listing-body'>
                        <NavLink to={`/listings/${list.id}`} >
                        <div className='indiv-listing-top'>
                            <div className='indiv-listing-header'>
                                    <h1 className='listing-title-user'>{list.name}</h1>
                                <div className='indiv-review-header'>
                                    <img className='indiv-rev-star' src={star} alt='star' />
                                    <span className='indiv-avg-rev'>{list?.avg_rating > 0 ? list.avg_rating.toFixed(1) : 'New'}</span>
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
