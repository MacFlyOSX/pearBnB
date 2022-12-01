import Cookies from 'js-cookie';

/******************************* ACTION TYPES: ********************************/

const ADD = 'bookings/ADD';
const LOAD = 'bookings/LOAD';
const DELETE = 'bookings/DELETE';

/********************************** CREATE ************************************/

// Add a booking

const _addBooking = (booking) => ({
    type: ADD,
    booking
});

export const addBooking = (booking, listingId) => async dispatch => {
    console.log('we are in the addBooking function');
    const response = await fetch(`/api/listings/${listingId}`);

    if (response.ok) {
        console.log('the response is a-okay');
        const listing = await response.json();

        const bookRes = await fetch(`/api/listings/${listingId}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
            },
            body: JSON.stringify(booking)
        });

        if (bookRes.ok) {
            const book = await bookRes.json();
            await dispatch(_addBooking(book));
            return book;
        }
    }
}


/********************************** READ **************************************/

// Get all bookings

const _loadBookings = bookings => ({
    type: LOAD,
    payload: bookings
});

export const loadBookings = listingId => async dispatch => {

    const response = await fetch(`/api/listings/${listingId}/bookings`);

    if (response.ok) {
        const list = await response.json();
        dispatch(_loadBookings(list));
    }
}

export const loadUsersBookings = () => async dispatch => {
    const response = await fetch(`/api/bookings/current`, {
        method: 'GET',
        headers: {
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        }
    });

    if (response.ok) {
        const list = await response.json();
        dispatch(_loadBookings(list));

        return list;
    }
};


/********************************* DELETE *************************************/

// Delete a review

const _deleteBooking = id => ({
    type: DELETE,
    id
});

export const deleteBooking = id => async dispatch => {
    const response = await fetch(`/api/bookings/${id}`, {
        method: 'DELETE',
        headers: {
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        },
    });

    if (response.ok) {
        const cool = await response.json();

        dispatch(_deleteBooking(id));

        return cool;
    }
};


/********************************** REDUCER ***********************************/


const initialState = { allBookings: {} };


const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:{
            const newState = { ...state, allBookings: { ...state.allBookings } };
            const allBookings = {};
            action.payload.Bookings.forEach(booking => allBookings[booking.id] = booking);
            newState.allBookings = allBookings;
            return newState;
        }
        case ADD:{
            const newState = { ...state, allBookings: { ...state.allBookings } };
            const newBooking = { ...action.booking };
            newState.allBookings[action.booking.id] = newBooking;
            return newState;
        }
        case DELETE:{
            const newState = { ...state, allBookings: { ...state.allBookings } };
            delete newState.allBookings[action.id];
            return newState;
        }
        default:
            return state;
    }
};

export default bookingReducer;
