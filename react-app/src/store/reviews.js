import Cookies from 'js-cookie';

/******************************* ACTION TYPES: ********************************/

const ADD = 'reviews/ADD';
const LOAD = 'reviews/LOAD';
const UPDATE = 'reviews/UPDATE';
const DELETE = 'reviews/DELETE';
const GET_ONE = 'reviews/GET_ONE';

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


// Get user's reviews

export const loadUsersReviews = () => async dispatch => {
    const response = await fetch(`/api/reviews/current`, {
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

const _getOneReview = payload => ({
    type: GET_ONE,
    payload
});

export const getOneReview = id => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`);

    if (response.ok) {
        const review = await response.json();

        dispatch(_getOneReview(review));
        return review;
    }
};


/********************************* UPDATE *************************************/

// Update a review

const _updateReview = (review) => ({
    type: UPDATE,
    review
});

export const updateReview = (reviewId, review) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
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

// Delete a review

const _deleteReview = id => ({
    type: DELETE,
    id
});

export const deleteReview = id => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`, {
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


const initialState = { allReviews: {}, singleReview: {} };


const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:{
            const newState = { ...state, allReviews: { ...state.allReviews }, singleReview: { ...state.singleReview } };
            const allReviews = {};
            action.payload.Reviews.forEach(review => allReviews[review.id] = review);
            newState.allReviews = allReviews;
            return newState;
        }
        case GET_ONE:{
            const newState = { ...state, allReviews: { ...state.allReviews }, singleReview: { ...state.singleReview } };
            const singleReview = { ...action.payload };
            newState.singleReview = singleReview;
            return newState;
        }
        case ADD:{
            const newState = { ...state, allReviews: { ...state.allReviews }, singleReview: { ...state.singleReview } };
            const newReview = { ...action.review };
            newState.allReviews[action.review.id] = newReview;
            return newState;
        }
        case UPDATE:{
            const newState = { ...state, allReviews: { ...state.allReviews }, singleReview: { ...state.singleReview } };
            const updatedReview = { ...action.review };
            newState.allReviews[action.review.id] = updatedReview;
            return newState;
        }
        case DELETE:{
            let newState = { ...state, allReviews: { ...state.allReviews }, singleReview: { ...state.singleReview } };
            delete newState.allReviews[action.id];
            newState = { ...newState };
            return newState;
        }
        default:
            return state;
    }
};

export default reviewReducer;
