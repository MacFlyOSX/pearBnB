import React from 'react'

const Homepage = () => {
  return (
    <div>Homepage</div>
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
