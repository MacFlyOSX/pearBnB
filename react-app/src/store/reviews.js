import Cookies from 'js-cookie';

/******************************* ACTION TYPES: ********************************/

const ADD = 'reviews/ADD';
const LOAD = 'reviews/LOAD';
const UPDATE = 'reviews/UPDATE';
const DELETE = 'reviews/DELETE';

/********************************** CREATE ************************************/

// Add a review

const _addReview = (review, listing) => ({
    type: ADD,
    review,
    listing
});

export const addReview = (review, listingId) => async dispatch => {

    const response = await fetch(`/api/listings/${listingId}`);

    if (response.ok) {
        const listing = await response.json();

        const reviewRes = await fetch(`/api/listings/${listingId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
            },
            body: JSON.stringify(review)
        });

        if (reviewRes.ok) {
            const review = await reviewRes.json();
            await dispatch(_addReview(review, listing));
            return review;
        }
    }

};


/********************************** READ **************************************/

// Get all review

const _loadReviews = reviews => ({
    type: LOAD,
    payload: reviews
});

export const loadReviews = id => async dispatch => {

    const response = await fetch(`/api/listings/${id}/reviews`);

        if (response.ok) {
            const list = await response.json();
            dispatch(_loadReviews(list));
        }
};


// Get user's listings

export const loadUsersReviews = () => async dispatch => {
    const response = await fetch(`/api/listings/current`, {
        method: 'GET',
        headers: {
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        }
    });

    if (response.ok) {
        const list = await response.json();
        dispatch(_loadReviews(list));

        return list;
    }
};


/********************************* UPDATE *************************************/

// Update a review

const _updateReview = (review, user, listing) => ({
    type: UPDATE,
    payload: {
        review,
        user,
        listing
    }
});

export const updateReview = (id, listing) => async dispatch => {
    const response = await fetch(`/api/listings/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        },
        body: JSON.stringify(listing)
    });

    if (response.ok) {
        const updatedReview = await response.json();

        dispatch(_updateReview(updatedReview));

        return updatedReview;
    }
};


/********************************* DELETE *************************************/

// Delete a listing

const _deleteReview = id => ({
    type: DELETE,
    id
});

export const deleteReview = id => async dispatch => {
    const response = await fetch(`/api/listings/${id}`, {
        method: 'DELETE',
        headers: {
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        },
    });

    if (response.ok) {
        const cool = await response.json();

        dispatch(_deleteReview(id));

        return cool;
    }
};


/********************************** REDUCER ***********************************/

export const clearData = () => ({
    type: CLEAR_DATA
});


const initialState = { allListings: {}, singleListing: {} };


const listingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:{
            const newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            const allListings = {};
            action.payload.Listings.forEach(listing => allListings[listing.id] = listing);
            newState.allListings = allListings;
            return newState;
        }
        case GET_ONE:{
            const newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            const singleListing = { ...action.payload };
            newState.singleListing = singleListing;
            return newState;
        }
        case ADD:{
            const newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            const newListing = { ...action.payload };
            newState.allListings[action.payload.id] = newListing;
            newState.singleListing = newListing;
            return newState;
        }
        case ADD_IMG:{
            const newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            newState.singleListing = action.business;
            newState.singleListing.images.push(action.img);
            return newState;
        }
        case UPDATE:{
            const newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            const updatedListing = { ...action.payload };
            newState.allListings[action.payload.id] = updatedListing;
            return newState;
        }
        case DELETE:{
            const newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            delete newState.allListings[action.id];
            newState = { ...newState };
            return newState;
        }
        case REMOVE_IMG:{
            const newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            const listingImages = newState.allListings[action.payload.id].images;
            for (let i = 0; i < listingImages.length; i++) {
                const img = listingImages[i];
                if (img === action.payload.url) listingImages.splice(i, 1);
            }
            newState = { ...newState };
            return newState;
        }
        case CLEAR_DATA:
            return initialState;
        default:
            return state;
    }
};

export default listingReducer;
