import Cookies from 'js-cookie';

/******************************* ACTION TYPES: ********************************/

const ADD = 'listings/ADD';
const LOAD = 'listings/LOAD';
const GET_ONE = 'listings/GET_ONE';
const UPDATE = 'listings/UPDATE';
const DELETE = 'listings/DELETE';
const ADD_IMG = 'listings/ADD_IMG';
const REMOVE_IMG = 'listings/REMOVE_IMG';
const CLEAR_DATA = 'listings/CLEAR_DATA';
const SET_TYPE = 'listings/SET_TYPE';

/********************************** CREATE ************************************/


export const queryType = (query) => ({
    type: SET_TYPE,
    query
});

// Add a listing

const _addListing = (listing) => ({
    type: ADD,
    payload: listing
});

export const addListing = (listing, images) => async dispatch => {
    console.log(JSON.stringify(listing))
    const response = await fetch('/api/listings/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        },
        body: JSON.stringify(listing)
    });

    if (response.ok) {
        const newListing = await response.json();

        newListing.images = [];

        for (let i = 0; i < images.length; i++) {
            console.log('here is the FOR loop for your images', images[i]);
            const res = await fetch(`/api/listings/${newListing.id}/images`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
                },
                body: JSON.stringify({url: images[i]})
            });

            if (res.ok) {
                const image = await res.json();
                newListing.images.push(image.url);
            }
        }

        await dispatch(_addListing(newListing));
        return newListing;
    }
};

// Add an image to a listing

const _addImg = (listing, img) => ({
    type: ADD_IMG,
    listing,
    img
});

export const addImg = (id, image) => async dispatch => {
    const response = await fetch(`/api/listings/${id}`);

    if (response.ok) {
        const listing = await response.json();

        const responseAddImg = await fetch(`/api/listings/${id}/images`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
            },
            body: JSON.stringify(image)
        });

        if (responseAddImg.ok) {
            const img = await responseAddImg.json();
            await dispatch(_addImg(listing, img));
            return img;
        }
    }
};


/********************************** READ **************************************/

// Get all listings

const _loadListings = payload => ({
    type: LOAD,
    payload
});

export const loadListings = (type, location, guests) => async dispatch => {

    const response = await fetch(`/api/listings/?type=${type ? type : ''}&location=${location ? location : ''}&guests=${guests ? guests : ''}`);

        if (response.ok) {
            const list = await response.json();
            dispatch(_loadListings(list));
        }
};


// Get user's listings

export const loadUsersListings = () => async dispatch => {
    const response = await fetch(`/api/listings/current`, {
        method: 'GET',
        headers: {
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        }
    });

    if (response.ok) {
        const list = await response.json();
        dispatch(_loadListings(list));

        return list;
    }
};

// Get a single listing

const _getOne = payload => ({
    type: GET_ONE,
    payload
});

export const getOne = id => async dispatch => {
    const response = await fetch(`/api/listings/${id}`);

    if (response.ok) {
        const listing = await response.json();

        dispatch(_getOne(listing));
        return listing;
    }
};


/********************************* UPDATE *************************************/

// Update a listing

const _updateListing = payload => ({
    type: UPDATE,
    payload
});

export const updateListing = (id, listing) => async dispatch => {
    console.log('this is the ID passed through', id);
    console.log('this is the payload passed through', listing);
    const response = await fetch(`/api/listings/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        },
        body: JSON.stringify(listing)
    });

    if (response.ok) {
        const updatedListing = await response.json();

        dispatch(_updateListing(updatedListing));

        return updatedListing;
    }
};


/********************************* DELETE *************************************/

// Delete a listing

const _deleteListing = id => ({
    type: DELETE,
    id
});

export const deleteListing = id => async dispatch => {
    const response = await fetch(`/api/listings/${id}`, {
        method: 'DELETE',
        headers: {
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        },
    });

    if (response.ok) {
        const cool = await response.json();

        dispatch(_deleteListing(id));

        return cool;
    }
};


// Delete a listing's image

const _deleteImg = (id, imageId) => ({
    type: REMOVE_IMG,
    payload: {
        id,
        imageId
    }
});

export const deleteImg = (id, imageId) => async dispatch => {
    const response = await fetch(`/api/listings/images/${imageId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const cool = await response.json();
        dispatch(_deleteImg(id, imageId));
        return cool;
    }
};

/********************************** REDUCER ***********************************/

export const clearData = () => ({
    type: CLEAR_DATA
});


const initialState = { allListings: {}, singleListing: {}, type: '' };


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
            let newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            delete newState.allListings[action.id];
            newState = { ...newState };
            return newState;
        }
        case REMOVE_IMG:{
            let newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            const listingImages = newState.allListings[action.payload.id].images;
            for (let i = 0; i < listingImages.length; i++) {
                const img = listingImages[i];
                if (img === action.payload.url) listingImages.splice(i, 1);
            }
            newState = { ...newState };
            return newState;
        }
        case SET_TYPE: {
            const newState = { ...state, allListings: { ...state.allListings }, singleListing: { ...state.singleListing } };
            newState.type = action.query;
            return newState;
        }
        case CLEAR_DATA:
            return initialState;
        default:
            return state;
    }
};

export default listingReducer;
