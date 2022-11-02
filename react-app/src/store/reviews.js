import Cookies from 'js-cookie';

/******************************* ACTION TYPES: ********************************/

const ADD = 'reviews/ADD';
const LOAD = 'reviews/LOAD';
const UPDATE = 'reviews/UPDATE';
const DELETE = 'reviews/DELETE';

/********************************** CREATE ************************************/

// Add a review

const _addReview = (review) => ({
    type: ADD,
    review
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
            await dispatch(_addReview(review));
            return review;
        }
    }

};


/********************************** READ **************************************/

// Get all reviews

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
    payload: review
});

export const updateReview = (reviewId, review, listingId) => async dispatch => {
    const response = await fetch(`/api/listings/${listingId}/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        },
        body: JSON.stringify(review)
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


const initialState = { allReviews: {} };


const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:{
            const newState = { ...state, allReviews: { ...state.allReviews } };
            const allReviews = {};
            action.payload.Reviews.forEach(review => allReviews[review.id] = review);
            newState.allReviews = allReviews;
            return newState;
        }
        case ADD:{
            const newState = { ...state, allReviews: { ...state.allReviews } };
            const newReview = { ...action.payload };
            newState.allReviews[action.payload.id] = newReview;
            return newState;
        }
        case UPDATE:{
            const newState = { ...state, allReviews: { ...state.allReviews } };
            const updatedReview = { ...action.payload };
            newState.allReviews[action.payload.id] = updatedReview;
            return newState;
        }
        case DELETE:{
            let newState = { ...state, allReviews: { ...state.allReviews } };
            delete newState.allReviews[action.id];
            newState = { ...newState };
            return newState;
        }
        default:
            return state;
    }
};

export default reviewReducer;
