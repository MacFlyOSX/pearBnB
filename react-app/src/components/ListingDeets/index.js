import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOne } from '../../store/listings';
import heart from '../../icons/homepage/saveheart.svg';
import star from '../../icons/listing/revstar.svg';
import door from '../../icons/listing/selfcheckin.svg';
import superhost from '../../icons/listing/superhost.svg';
import parking from '../../icons/listing/parkforfree.svg';
import pearcover from '../../icons/listing/pearcover.png';
import './ListingDeets.css';

const ListingDeets = () => {
    const { listingId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const listing = useSelector(state => state.listings.singleListing);
    console.log('this is the listing',listing);

    useEffect(() => {
        dispatch(getOne(listingId));
    }, [dispatch]);

    const toolbar = document.getElementById('hidden-toolbar');
    function onScrollShow() {
        if (toolbar) {
            let y = window.scrollY;
            if (y >= 800) {
                toolbar.className = 'listing-details-toolbar';
            } else {
                toolbar.className = 'listing-details-hiddentoolbar';
            }
        }
    }
    window.addEventListener('scroll', onScrollShow);

  return (
    <div className='main'>
    <div className='listing-details-container'>
        {/* <div id='hidden-toolbar'>
            <div className='toolbar-inner'>
                <a href='#main-image'>Photos</a>
            </div>
        </div> */}
        <div className='listing-details-header'>
            <h1 className='listing-title'>{listing.name}</h1>
            <div className='review-location-save'>
                <div className='rev-location'>
                    <img className='listing-star' src={star} alt='star' />
                    <span className='review-listing rev-loc-span'>{listing.avg_rating}</span>
                    <span id='middot'>&middot;</span>
                    <span className='num-reviews rev-loc-span'>num reviews</span>
                    <span id='middot'>&middot;</span>
                    <span className='listing-location rev-loc-span'>{listing.city}, {listing.state}, United States</span>
                </div>
                <div className='save'>
                    <button className='save-button'>
                        <img src={heart} alt='heart' className='heart' />
                        <span className='save-span'>Save</span>
                    </button>
                </div>
            </div>
        </div>
        <div className='listing-details-photos'>
            <div className='listing-photos-outer-grid'>
                <img id='main-image' className='main-listing-image' src={listing?.images?.[0]} alt='listing' />
                <div className='right-listing-image-grid'>
                    <img className='listing-image' src={listing?.images?.[1]} alt='listing' />
                    <img className='listing-image listing-image-righttop' src={listing?.images?.[2]} alt='listing' />
                    <img className='listing-image' src={listing?.images?.[3]} alt='listing' />
                    <img className='listing-image listing-image-rightbottom' src={listing?.images?.[4]} alt='listing' />
                </div>
            </div>
        </div>
        <div className='listing-details-middle-container'>
            <div className='listing-details-middle-left'>
                <div className='middle-title-section mid-left'>
                    <div className='title-section-left'>
                        <h1 className='title-below-pictures'>Entire home hosted by {listing?.owner?.first_name}</h1>
                        <span className='bed-bath-span'>{listing.max_guests} guests</span>
                        <span id='middot'>&middot;</span>
                        <span className='bed-bath-span'>{listing.bed} {listing.bed > 1 ? 'beds' : 'bed'}</span>
                        <span id='middot'>&middot;</span>
                        <span className='bed-bath-span'>{listing.bath} {listing.bath > 1 ? 'baths' : 'bath'}</span>
                    </div>
                    <div className='user-icon'><img className='user-icon-image' src='https://i.imgur.com/xrTfdN1.png' alt='user' /></div>
                </div>
                <div className='middle-perks-section mid-left'>
                    <div className='each-perk upper-perk'>
                        <img src={superhost} alt='super' className='perk-icon' />
                        <div className='perk-details'>
                            <span className='perk-title'>{listing?.owner?.first_name} is a Superhost</span>
                            <span className='perk-description'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</span>
                        </div>
                    </div>
                    <div className='each-perk upper-perk'>
                        <img src={door} alt='door' className='perk-icon' />
                        <div className='perk-details'>
                            <span className='perk-title'>Self check-in</span>
                            <span className='perk-description'>Check yourself in with the keypad.</span>
                        </div>
                    </div>
                    <div className='each-perk'>
                        <img src={parking} alt='parking' className='perk-icon' />
                        <div className='perk-details'>
                            <span className='perk-title'>Park for free</span>
                            <span className='perk-description'>This is one of the few places in the area with plenty of free parking.</span>
                        </div>
                    </div>
                </div>
                <div className='middle-pearcover-section mid-left'>
                    <img src={pearcover} alt='pearcover' id='pearcover' />
                    <div className='pearcover-description'>
                    Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                    </div>
                </div>
                <div className='middle-description-section mid-left'>
                    {listing.description}
                </div>
                <div className='middle-amenities-section mid-left'></div>
            </div>
            <div className='listing-details-booking-right'>
                <div className='sticky-booking-container'></div>
            </div>
        </div>
        <div className='listing-details-reviews'></div>
        <div className='listing-details-where'></div>
    </div></div>
  )
}

export default ListingDeets;