import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { getOne } from '../../store/listings';
import { loadReviews } from '../../store/reviews';
// import heart from '../../icons/homepage/saveheart.svg';
import add from '../../icons/listing/add.svg';
import star from '../../icons/listing/revstar.svg';
import door from '../../icons/listing/selfcheckin.svg';
import superhost from '../../icons/listing/superhost.svg';
import parking from '../../icons/listing/parkforfree.svg';
import pearcover from '../../icons/listing/pearcover.png';
import construction from '../../icons/construction.png';
import './ListingDeets.css';

const ListingDeets = () => {
    const { listingId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const reviewObj = useSelector(state => state.reviews.allReviews);
    const reviews = Object.values(reviewObj);

    const user = useSelector(state => state.session.user);

    let acc = 0;
    let clean = 0;
    let check = 0;
    let comm = 0;
    let loc = 0;
    let val = 0;
    let numReviews;

    let accStyle;
    let cleanStyle;
    let checkStyle;
    let commStyle;
    let locStyle;
    let valStyle;

    if (reviews) {
        numReviews = reviews.length;
        reviews.forEach(review => {
            acc += review.acc;
            clean += review.clean;
            check += review.check;
            comm += review.comm;
            loc += review.loc;
            val += review.val;
        });

        acc /= numReviews;
        clean /= numReviews;
        check /= numReviews;
        comm /= numReviews;
        loc /= numReviews;
        val /= numReviews;

        accStyle = {
            width: `${acc / 5 * 100}%`
        }
        cleanStyle = {
            width: `${clean / 5 * 100}%`
        }
        checkStyle = {
            width: `${check / 5 * 100}%`
        }
        commStyle = {
            width: `${comm / 5 * 100}%`
        }
        locStyle = {
            width: `${loc / 5 * 100}%`
        }
        valStyle = {
            width: `${val / 5 * 100}%`
        }
    }

    const listing = useSelector(state => state.listings.singleListing);
    console.log('this is the listing',listing);

    /*
    if (reviews) {

    }
    */

    useEffect(() => {
        dispatch(getOne(listingId));
        dispatch(loadReviews(listingId));
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
                    <span className='review-listing rev-loc-span'>{listing?.avg_rating?.toFixed(1)}</span>
                    <span id='middot'>&middot;</span>
                    <span className='num-reviews rev-loc-span'>{numReviews} reviews</span>
                    <span id='middot'>&middot;</span>
                    <span className='listing-location rev-loc-span'>{listing.city}, {listing.state}, United States</span>
                </div>
                <div className='save'>
                    {/* <button className='save-button'>
                        <img src={heart} alt='heart' className='heart' />
                        <span className='save-span'>Save</span>
                    </button> */}
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
                    <div className='user-icon'><img className='user-icon-image' src={listing?.owner?.profile_pic} alt='user' /></div>
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
                <div className='middle-amenities-section'>
                    <h1 id='amenities'>What this place offers</h1>
                    <img src={construction} alt='construction' className='construction' />
                </div>
            </div>
            <div className='listing-details-booking-right'>
                <div className='sticky-booking-container'>
                    <div className='booking-container'>
                        <div className='booking-title'>
                            <div className='booking-cost-per'>
                                <span id='cost-booking'>${listing.price}</span>
                                <span id='night-booking'>night</span>
                            </div>
                            <div className='booking-reviews'>
                                <img src={star} alt='star' id='booking-star' />
                                <span id='booking-review-avg'>{listing?.avg_rating?.toFixed(1)}</span>
                                <span id='middot'>&middot;</span>
                                <span id='booking-num-reviews'>{numReviews} reviews</span>
                            </div>
                        </div>
                        <div className='booking-form-container'>
                            <form class='booking-form'>
                                <div className='booking-calendar'>
                                <div className='calendar-inner left-inner-calendar'>
                                    <span className='checkin-upper-text'>CHECK-IN</span>
                                    <input type='date' id='booking-checkin' />
                                </div>
                                <div className='calendar-inner'>
                                    <span className='checkin-upper-text'>CHECKOUT</span>
                                    <input type='date' id='booking-checkin' />
                                </div>
                                </div>
                                {/* <button id='submit-booking' type='submit' >Reserve</button> */}
                                <div id='under-construction' onClick={() => undefined} >🚧 Under Construction 🚧</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='listing-details-reviews'>
            <div className='listing-details-review-header'>
                <h1 id='reviews' >
                    <img src={star} className='review-section-star' alt='star' />
                    <span className='review-section-avg'>{listing?.avg_rating?.toFixed(1)}</span>
                    <span id='rev-middot'>&middot;</span>
                    <span className='review-section-avg'>{numReviews} reviews</span>
                </h1>
                {user?.id === listing?.owner_id ? null : !user ? null : reviews?.filter(rev => rev.user_id === user.id)?.length ? null :
                <NavLink to={`/listings/${listingId}/reviews/new`}>
                    <button id='add-review-button'>
                        <img src={add} alt='add' id='add-review-svg' />
                        Add review
                    </button>
                </NavLink>}
            </div>
            <div className='review-breakdown-section'>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Cleanliness</div>
                    <div className='specfic-stat-breakdown'>
                        <div className='stat-container'>
                            <div className='stat-distribution' style={cleanStyle} ></div>
                        </div>
                        <span className='stat-number'>{clean.toFixed(1)}</span>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Accuracy</div>
                    <div className='specfic-stat-breakdown'>
                        <div className='stat-container'>
                            <div className='stat-distribution' style={accStyle} ></div>
                        </div>
                        <span className='stat-number'>{acc.toFixed(1)}</span>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Communication</div>
                    <div className='specfic-stat-breakdown'>
                        <div className='stat-container'>
                            <div className='stat-distribution' style={commStyle} ></div>
                        </div>
                        <span className='stat-number'>{comm.toFixed(1)}</span>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Location</div>
                    <div className='specfic-stat-breakdown'>
                        <div className='stat-container'>
                            <div className='stat-distribution' style={locStyle} ></div>
                        </div>
                        <span className='stat-number'>{loc.toFixed(1)}</span>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Check-in</div>
                    <div className='specfic-stat-breakdown'>
                        <div className='stat-container'>
                            <div className='stat-distribution' style={checkStyle} ></div>
                        </div>
                        <span className='stat-number'>{check.toFixed(1)}</span>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Value</div>
                    <div className='specfic-stat-breakdown'>
                        <div className='stat-container'>
                            <div className='stat-distribution' style={valStyle} ></div>
                        </div>
                        <span className='stat-number'>{val.toFixed(1)}</span>
                    </div>
                </div>
            </div>
            <div className='reviews-container'>
                {reviews.map((review, i) =>
                    (
                        <div className='single-review-container' key={i}>
                            <div className='single-review-title'>
                                <img src={review?.user?.profile_pic} alt='user' className='user-icon-single-review' />
                                <div className='single-review-user'>
                                    <span className='single-review-name'>{review?.user?.first_name}</span>
                                    <span className='single-review-date'>{review?.created_at?.slice(5,7) === '01' ? `January ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '02' ? `February ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '03' ? `March ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '04' ? `April ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '05' ? `May ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '06' ? `June ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '07' ? `July ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '08' ? `August ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '09' ? `September ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '10' ? `October ${review?.created_at?.slice(0,4)}` : review?.created_at?.slice(5,7) === '11' ? `November ${review?.created_at?.slice(0,4)}` : `December ${review?.created_at?.slice(0,4)}`}</span>
                                </div>
                            </div>
                            <div className='single-review-body'>{review.review_body}</div>
                        </div>
                    )
                )}
            </div>
        </div>
        <div className='listing-details-where'></div>
    </div></div>
  )
}

export default ListingDeets;
