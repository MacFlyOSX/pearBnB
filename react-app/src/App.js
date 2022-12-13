import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ListingDeets from './components/ListingDeets';
import CreateListing from './components/ListingForms/CreateListing';
import UpdateListing from './components/ListingForms/UpdateListing';
import CreateReview from './components/ReviewForms/CreateReview';
import UpdateReview from './components/ReviewForms/UpdateReview';
import { authenticate } from './store/session';
import Listings from './components/UserPages/Listings';
import Reviews from './components/UserPages/Reviews';
import Trips from './components/UserPages/Trips';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <Homepage />
        </Route>
        <ProtectedRoute exact path='/listings/new' >
          <CreateListing />
        </ProtectedRoute>
        <ProtectedRoute exact path='/listings/current' >
          <Listings />
        </ProtectedRoute>
        <ProtectedRoute exact path='/reviews/current' >
          <Reviews />
        </ProtectedRoute>
        <ProtectedRoute exact path='/trips/current' >
          <Trips />
        </ProtectedRoute>
        <Route exact path='/listings/:listingId' >
          <ListingDeets />
        </Route>
        <ProtectedRoute exact path='/listings/:listingId/update' >
          <UpdateListing />
        </ProtectedRoute>
        <ProtectedRoute exact path='/listings/:listingId/reviews/new'>
          <CreateReview />
        </ProtectedRoute>
        <ProtectedRoute exact path='/reviews/:reviewId/update'>
          <UpdateReview />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
