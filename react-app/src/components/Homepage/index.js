import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadListings, clearData } from '../../store/listings';
import './Homepage.css';
// import saveheart from '../../icons/homepage/saveheart.svg';
// import leftarrow from '../../icons/homepage/arrowleft.svg';
// import rightarrow from '../../icons/homepage/arrowright.svg';
import star from '../../icons/homepage/cardstar.svg';
import disPear from '../../icons/homepage/disappointed-pear.gif';

const Homepage = () => {
    const dispatch = useDispatch();
    const listingList = useSelector(state => state.listings.allListings);
    const listings = listingList ? Object.values(listingList) : null;
    const type = useSelector(state => state.listings.type);
    console.log('this is the type', type);

    const puns = [
        'PrePEAR for fun',
        'With room to sPEAR',
        'Nothing else comPEARs',
        'The perfect PEARing for your trip',
        'Comfort PEARed with lots of fun'
    ]

    // const typesSection = (
    //     <div className='navbar-types-section'>
    //       <div className='types-section-inner'>
    //         <button className='type-button'>
    //           <img src={omg} alt='omg' className='type-icon' />
    //           <span className='type-name'>OMG!</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={luxe} alt='luxe' className='type-icon' />
    //           <span className='type-name'>Luxe</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={bf} alt='bf' className='type-icon' />
    //           <span className='type-name'>Beachfront</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={man} alt='man' className='type-icon' />
    //           <span className='type-name'>Mansions</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={cab} alt='cab' className='type-icon' />
    //           <span className='type-name'>Cabins</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={ryo} alt='ryo' className='type-icon' />
    //           <span className='type-name'>Ryokans</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={des} alt='des' className='type-icon' />
    //           <span className='type-name'>Desert</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={lake} alt='lake' className='type-icon' />
    //           <span className='type-name'>Lakefront</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={tiny} alt='tiny' className='type-icon' />
    //           <span className='type-name'>Tiny homes</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={cast} alt='cast' className='type-icon' />
    //           <span className='type-name'>Castles</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={con} alt='con' className='type-icon' />
    //           <span className='type-name'>Containers</span>
    //         </button>
    //         <button className='type-button'>
    //           <img src={camp} alt='camp' className='type-icon' />
    //           <span className='type-name'>Camping</span>
    //         </button>
    //       </div>
    //     </div>
    //   )

    useEffect(() => {
        dispatch(loadListings(type));

        // return () => dispatch(clearData());
    }, [type, dispatch]);


    if (!Object.keys(listingList).length) {
        return (
            <div className='main-homepage-container'>
                <div className='empty-list-container'>
                    <h1 className='empty-list-title'>It appears that there are no listings that match your selection(s).<br /></h1>
                    <img src={disPear} alt='sadpear' id='dispear' />
                </div>
            </div>
        )
    }

    return (
        <>
        {/* {typesSection} */}
      <div className='main-homepage-container'>
          <div className='main-card-container'>
          {listings.map((listing, i) => (
            <a key={i} className='listing-card-link' href={`/listings/${listing.id}`}>
                <div className='listing-card'>
                    <div className='listing-card-innertop' style={{backgroundImage: `url(${listing.images[0]})`}}>
                        <div className='listing-image-inner'>
                            <div className='listing-image-top'>
                                {/* <button className='listing-image-top-button'>
                                    <img className='save-heart' src={saveheart} alt='heart' />
                                </button> */}
                            </div>
                            <div className='listing-image-middle'>
                                {/* <button id='arrow' className='arrow-button'>
                                    <img src={leftarrow} alt='left' id='' className='arrow' />
                                </button>
                                <button id='arrow' className='arrow-button'>
                                    <img src={rightarrow} alt='right' className='arrow' />
                                </button> */}
                            </div>
                            <div className='listing-image-bottom'>
                                {/* <div class="_1b2klj3" style="transform: translateX(0px);">
                                    <span class="_4o74ccl" style="transform: scale(1);"></span>
                                    <span class="_1k9ksvh" style="transform: scale(1);"></span>
                                    <span class="_1k9ksvh" style="transform: scale(1);"></span>
                                    <span class="_1k9ksvh" style="transform: scale(0.833333);"></span>
                                    <span class="_1k9ksvh" style="transform: scale(0.666667);"></span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='listing-card-innerbottom'>
                        <div className='listing-card-info'>
                            <div className='listing-info-location listing-info'>
                                {listing.city}, {listing.state}
                            </div>
                            <div className='listing-info-distance listing-info'>
                                {puns[Math.floor(Math.random() * puns.length)]}
                            </div>
                            <div className='listing-info-cost'>
                                <span className='cost-dollars'>${listing.price} </span>
                                <span className='cost-night'>night</span>
                            </div>
                        </div>
                        <div className='listing-card-rating'>
                            <span className='listing-rating-star'>
                                <img src={star} alt='star' />
                            </span>
                            <span className='listing-rating-avg'>
                                {listing.avg_rating.toFixed(1)}
                            </span>
                        </div>
                    </div>
                </div>
            </a>
          ))}
          </div>
      </div>
      </>
    )
}

export default Homepage;


/*
<a className='listing-card-link' href={`/listings/${listing.id}`}>
    <div className='listing-card'>
        <div className='listing-card-innertop'>
            <div className='listing-image-inner'>
                <div className='listing-image-top'>
                    <button className='listing-image-top-button>
                        <img className='save-heart' src={saveheart} alt='heart' />
                    </button>
                </div>
                <div className='listing-image-middle'>
                    <button className='arrow-button'>
                        <img src={leftarrow} alt='left' />
                    </button>
                    <button className='arrow-button'>
                        <img src={rightarrow} alt='right' />
                    </button>
                </div>
                <div className='listing-image-bottom'>
                    <div class="_1b2klj3" style="transform: translateX(0px);">
                        <span class="_4o74ccl" style="transform: scale(1);"></span>
                        <span class="_1k9ksvh" style="transform: scale(1);"></span>
                        <span class="_1k9ksvh" style="transform: scale(1);"></span>
                        <span class="_1k9ksvh" style="transform: scale(0.833333);"></span>
                        <span class="_1k9ksvh" style="transform: scale(0.666667);"></span>
                    </div>
                </div>
            </div>
        </div>
        <div className='listing-card-innerbottom'>
            <div className='listing-card-info'>
                <div className='listing-info-location listing-info'>
                    {listing.city}, {listing.state}
                </div>
                <div className='listing-info-distance listing-info'>
                    num miles away
                </div>
                <div className='listing-info-cost'>
                    <span className='cost-dollars'>${listing.price} </span>
                    <span className='cost-night'>night</span>
                </div>
            </div>
            <div className='listing-card-rating'>
                <span className='listing-rating-star'>
                    <img src={star} alt='star' />
                </span>
                <span className='listing-rating-avg'>
                    {listing.avg}
                </span>
            </div>
        </div>
    </div>
</a>
*/


function distance(lat1, lon1, lat2, lon2) {

    lon1 = lon1 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
            + Math.cos(lat1) * Math.cos(lat2)
            * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in miles
    let r = 3956;

    // calculate the result
    return c * r;
}
