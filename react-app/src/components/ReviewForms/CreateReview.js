import React, { useEffect, useState, useRef } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Review.css';
import { getOne } from '../../store/listings';
import { addReview } from '../../store/reviews';

const CreateReview = () => {
    const { listingId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);

    const [ hover1a, isHover1a ] = useHover();
    const [ hover2a, isHover2a ] = useHover();
    const [ hover3a, isHover3a ] = useHover();
    const [ hover4a, isHover4a ] = useHover();
    const [ hover5a, isHover5a ] = useHover();
    const [ hover1b, isHover1b ] = useHover();
    const [ hover2b, isHover2b ] = useHover();
    const [ hover3b, isHover3b ] = useHover();
    const [ hover4b, isHover4b ] = useHover();
    const [ hover5b, isHover5b ] = useHover();
    const [ hover1c, isHover1c ] = useHover();
    const [ hover2c, isHover2c ] = useHover();
    const [ hover3c, isHover3c ] = useHover();
    const [ hover4c, isHover4c ] = useHover();
    const [ hover5c, isHover5c ] = useHover();
    const [ hover1d, isHover1d ] = useHover();
    const [ hover2d, isHover2d ] = useHover();
    const [ hover3d, isHover3d ] = useHover();
    const [ hover4d, isHover4d ] = useHover();
    const [ hover5d, isHover5d ] = useHover();
    const [ hover1e, isHover1e ] = useHover();
    const [ hover2e, isHover2e ] = useHover();
    const [ hover3e, isHover3e ] = useHover();
    const [ hover4e, isHover4e ] = useHover();
    const [ hover5e, isHover5e ] = useHover();
    const [ hover1f, isHover1f ] = useHover();
    const [ hover2f, isHover2f ] = useHover();
    const [ hover3f, isHover3f ] = useHover();
    const [ hover4f, isHover4f ] = useHover();
    const [ hover5f, isHover5f ] = useHover();
    const [ cleanRate, setCleanRate ] = useState(0);
    const [ commRate, setCommRate ] = useState(0);
    const [ checkRate, setCheckRate ] = useState(0);
    const [ accRate, setAccRate ] = useState(0);
    const [ locRate, setLocRate ] = useState(0);
    const [ valRate, setValRate ] = useState(0);
    const [ revBody, setRevBody ] = useState('');
    const [ char, setChar ] = useState(500);
    const [ errors, setErrors ] = useState([]);

    const listing = useSelector(state => state.listings.singleListing);

    if (user.id === listing?.owner_id) {
        alert('You cannot post a review for your own listing.');
        history.replace('/');
    }

    useEffect(() => {
        setChar(500 - revBody.length);
    }, [revBody]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errs = [];
        if(cleanRate < 1) errs.push('clean');
        if(commRate < 1) errs.push('comm');
        if(checkRate < 1) errs.push('check');
        if(accRate < 1) errs.push('acc');
        if(locRate < 1) errs.push('loc');
        if(valRate < 1) errs.push('val');
        if(!revBody) errs.push('body');

        if (errs.length) return setErrors(errs);

        setErrors([]);

        const payload = {
            review_body: revBody,
            rating: (cleanRate + commRate + checkRate + accRate + locRate + valRate) / 6,
            clean: cleanRate,
            comm: commRate,
            check: checkRate,
            acc: accRate,
            loc: locRate,
            val: valRate
        };

        const newReview = await dispatch(addReview(payload, listingId));

        if (newReview) history.replace(`/listings/${listingId}`);
    }

    useEffect(() => {
        dispatch(getOne(listingId));
    }, [dispatch, listingId]);


return (
    <div className='create-review-container'>
        <div className='create-review-inner-container'>
        <h1 className='create-review-header-title'>Rate & review: {listing?.name}</h1>
        <div className='create-review-breakdown-section'>
                <div className='create-specific-review-stat'>
                    <div className='create-specific-stat-title'>Cleanliness</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg ref={hover1a} id={isHover1a ? 'one' : isHover2a ? 'two' : isHover3a ? 'three' : isHover4a ? 'four' : isHover5a ? 'five' : ''}
                                className={cleanRate > 4 ? 'create-review-svg green-machine' : cleanRate > 3 ? 'create-review-svg green-goblin' : cleanRate > 2 ? 'create-review-svg green-bean' : cleanRate > 1 ? 'create-review-svg lima-bean' : cleanRate > 0 ? 'create-review-svg edamame' : 'create-review-svg grey-bean'}
                                onClick={() => setCleanRate(1)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg ref={hover2a} id={isHover1a ? 'grey' : isHover2a ? 'two' : isHover3a ? 'three' : isHover4a ? 'four' : isHover5a ? 'five' : ''}
                                className={cleanRate > 4 ? 'create-review-svg green-machine' : cleanRate > 3 ? 'create-review-svg green-goblin' : cleanRate > 2 ? 'create-review-svg green-bean' : cleanRate > 1 ? 'create-review-svg lima-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setCleanRate(2)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg ref={hover3a} id={isHover1a ? 'grey' : isHover2a ? 'grey' : isHover3a ? 'three' : isHover4a ? 'four' : isHover5a ? 'five' : ''}
                                className={cleanRate > 4 ? 'create-review-svg green-machine' : cleanRate > 3 ? 'create-review-svg green-goblin' : cleanRate > 2 ? 'create-review-svg green-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setCleanRate(3)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg ref={hover4a} id={isHover1a ? 'grey' : isHover2a ? 'grey' : isHover3a ? 'grey' : isHover4a ? 'four' : isHover5a ? 'five' : ''}
                                className={cleanRate > 4 ? 'create-review-svg green-machine' : cleanRate > 3 ? 'create-review-svg green-goblin' : 'create-review-svg grey-bean'}
                                onClick={() => setCleanRate(4)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg ref={hover5a} id={isHover1a ? 'grey' : isHover2a ? 'grey' : isHover3a ? 'grey' : isHover4a ? 'grey' : isHover5a ? 'five' : ''}
                                className={cleanRate > 4 ? 'create-review-svg green-machine' : 'create-review-svg grey-bean'}
                                onClick={() => setCleanRate(5)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg><span className={errors.includes('clean') ? 'required-span' : 'invisible-span'}>*Required</span>
                        </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Accuracy</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg ref={hover1b} id={isHover1b ? 'one' : isHover2b ? 'two' : isHover3b ? 'three' : isHover4b ? 'four' : isHover5b ? 'five' : ''}
                                className={accRate > 4 ? 'create-review-svg green-machine' : accRate > 3 ? 'create-review-svg green-goblin' : accRate > 2 ? 'create-review-svg green-bean' : accRate > 1 ? 'create-review-svg lima-bean' : accRate > 0 ? 'create-review-svg edamame' : 'create-review-svg grey-bean'}
                                onClick={() => setAccRate(1)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg ref={hover2b} id={isHover1b ? 'grey' : isHover2b ? 'two' : isHover3b ? 'three' : isHover4b ? 'four' : isHover5b ? 'five' : ''}
                                className={accRate > 4 ? 'create-review-svg green-machine' : accRate > 3 ? 'create-review-svg green-goblin' : accRate > 2 ? 'create-review-svg green-bean' : accRate > 1 ? 'create-review-svg lima-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setAccRate(2)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg ref={hover3b} id={isHover1b ? 'grey' : isHover2b ? 'grey' : isHover3b ? 'three' : isHover4b ? 'four' : isHover5b ? 'five' : ''}
                                className={accRate > 4 ? 'create-review-svg green-machine' : accRate > 3 ? 'create-review-svg green-goblin' : accRate > 2 ? 'create-review-svg green-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setAccRate(3)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg ref={hover4b} id={isHover1b ? 'grey' : isHover2b ? 'grey' : isHover3b ? 'grey' : isHover4b ? 'four' : isHover5b ? 'five' : ''}
                                className={accRate > 4 ? 'create-review-svg green-machine' : accRate > 3 ? 'create-review-svg green-goblin' : 'create-review-svg grey-bean'}
                                onClick={() => setAccRate(4)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg ref={hover5b} id={isHover1b ? 'grey' : isHover2b ? 'grey' : isHover3b ? 'grey' : isHover4b ? 'grey' : isHover5b ? 'five' : ''}
                                className={accRate > 4 ? 'create-review-svg green-machine' : 'create-review-svg grey-bean'}
                                onClick={() => setAccRate(5)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg><span className={errors.includes('acc') ? 'required-span' : 'invisible-span'}>*Required</span>
                        </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Communication</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg ref={hover1c} id={isHover1c ? 'one' : isHover2c ? 'two' : isHover3c ? 'three' : isHover4c ? 'four' : isHover5c ? 'five' : ''}
                                className={commRate > 4 ? 'create-review-svg green-machine' : commRate > 3 ? 'create-review-svg green-goblin' : commRate > 2 ? 'create-review-svg green-bean' : commRate > 1 ? 'create-review-svg lima-bean' : commRate > 0 ? 'create-review-svg edamame' : 'create-review-svg grey-bean'}
                                onClick={() => setCommRate(1)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg ref={hover2c} id={isHover1c ? 'grey' : isHover2c ? 'two' : isHover3c ? 'three' : isHover4c ? 'four' : isHover5c ? 'five' : ''}
                                className={commRate > 4 ? 'create-review-svg green-machine' : commRate > 3 ? 'create-review-svg green-goblin' : commRate > 2 ? 'create-review-svg green-bean' : commRate > 1 ? 'create-review-svg lima-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setCommRate(2)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg ref={hover3c} id={isHover1c ? 'grey' : isHover2c ? 'grey' : isHover3c ? 'three' : isHover4c ? 'four' : isHover5c ? 'five' : ''}
                                className={commRate > 4 ? 'create-review-svg green-machine' : commRate > 3 ? 'create-review-svg green-goblin' : commRate > 2 ? 'create-review-svg green-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setCommRate(3)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg ref={hover4c} id={isHover1c ? 'grey' : isHover2c ? 'grey' : isHover3c ? 'grey' : isHover4c ? 'four' : isHover5c ? 'five' : ''}
                                className={commRate > 4 ? 'create-review-svg green-machine' : commRate > 3 ? 'create-review-svg green-goblin' : 'create-review-svg grey-bean'}
                                onClick={() => setCommRate(4)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg ref={hover5c} id={isHover1c ? 'grey' : isHover2c ? 'grey' : isHover3c ? 'grey' : isHover4c ? 'grey' : isHover5c ? 'five' : ''}
                                className={commRate > 4 ? 'create-review-svg green-machine' : 'create-review-svg grey-bean'}
                                onClick={() => setCommRate(5)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg><span className={errors.includes('comm') ? 'required-span' : 'invisible-span'}>*Required</span>
                        </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Location</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg ref={hover1d} id={isHover1d ? 'one' : isHover2d ? 'two' : isHover3d ? 'three' : isHover4d ? 'four' : isHover5d ? 'five' : ''}
                                className={locRate > 4 ? 'create-review-svg green-machine' : locRate > 3 ? 'create-review-svg green-goblin' : locRate > 2 ? 'create-review-svg green-bean' : locRate > 1 ? 'create-review-svg lima-bean' : locRate > 0 ? 'create-review-svg edamame' : 'create-review-svg grey-bean'}
                                onClick={() => setLocRate(1)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg ref={hover2d} id={isHover1d ? 'grey' : isHover2d ? 'two' : isHover3d ? 'three' : isHover4d ? 'four' : isHover5d ? 'five' : ''}
                                className={locRate > 4 ? 'create-review-svg green-machine' : locRate > 3 ? 'create-review-svg green-goblin' : locRate > 2 ? 'create-review-svg green-bean' : locRate > 1 ? 'create-review-svg lima-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setLocRate(2)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg ref={hover3d} id={isHover1d ? 'grey' : isHover2d ? 'grey' : isHover3d ? 'three' : isHover4d ? 'four' : isHover5d ? 'five' : ''}
                                className={locRate > 4 ? 'create-review-svg green-machine' : locRate > 3 ? 'create-review-svg green-goblin' : locRate > 2 ? 'create-review-svg green-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setLocRate(3)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg ref={hover4d} id={isHover1d ? 'grey' : isHover2d ? 'grey' : isHover3d ? 'grey' : isHover4d ? 'four' : isHover5d ? 'five' : ''}
                                className={locRate > 4 ? 'create-review-svg green-machine' : locRate > 3 ? 'create-review-svg green-goblin' : 'create-review-svg grey-bean'}
                                onClick={() => setLocRate(4)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg ref={hover5d} id={isHover1d ? 'grey' : isHover2d ? 'grey' : isHover3d ? 'grey' : isHover4d ? 'grey' : isHover5d ? 'five' : ''}
                                className={locRate > 4 ? 'create-review-svg green-machine' : 'create-review-svg grey-bean'}
                                onClick={() => setLocRate(5)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg><span className={errors.includes('loc') ? 'required-span' : 'invisible-span'}>*Required</span>
                        </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Check-in</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg ref={hover1e} id={isHover1e ? 'one' : isHover2e ? 'two' : isHover3e ? 'three' : isHover4e ? 'four' : isHover5e ? 'five' : ''}
                                className={checkRate > 4 ? 'create-review-svg green-machine' : checkRate > 3 ? 'create-review-svg green-goblin' : checkRate > 2 ? 'create-review-svg green-bean' : checkRate > 1 ? 'create-review-svg lima-bean' : checkRate > 0 ? 'create-review-svg edamame' : 'create-review-svg grey-bean'}
                                onClick={() => setCheckRate(1)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg ref={hover2e} id={isHover1e ? 'grey' : isHover2e ? 'two' : isHover3e ? 'three' : isHover4e ? 'four' : isHover5e ? 'five' : ''}
                                className={checkRate > 4 ? 'create-review-svg green-machine' : checkRate > 3 ? 'create-review-svg green-goblin' : checkRate > 2 ? 'create-review-svg green-bean' : checkRate > 1 ? 'create-review-svg lima-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setCheckRate(2)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg ref={hover3e} id={isHover1e ? 'grey' : isHover2e ? 'grey' : isHover3e ? 'three' : isHover4e ? 'four' : isHover5e ? 'five' : ''}
                                className={checkRate > 4 ? 'create-review-svg green-machine' : checkRate > 3 ? 'create-review-svg green-goblin' : checkRate > 2 ? 'create-review-svg green-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setCheckRate(3)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg ref={hover4e} id={isHover1e ? 'grey' : isHover2e ? 'grey' : isHover3e ? 'grey' : isHover4e ? 'four' : isHover5e ? 'five' : ''}
                                className={checkRate > 4 ? 'create-review-svg green-machine' : checkRate > 3 ? 'create-review-svg green-goblin' : 'create-review-svg grey-bean'}
                                onClick={() => setCheckRate(4)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg ref={hover5e} id={isHover1e ? 'grey' : isHover2e ? 'grey' : isHover3e ? 'grey' : isHover4e ? 'grey' : isHover5e ? 'five' : ''}
                                className={checkRate > 4 ? 'create-review-svg green-machine' : 'create-review-svg grey-bean'}
                                onClick={() => setCheckRate(5)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg><span className={errors.includes('check') ? 'required-span' : 'invisible-span'}>*Required</span>
                        </div>
                    </div>
                </div>
                <div className='specific-review-stat'>
                    <div className='specific-stat-title'>Value</div>
                    <div className='create-specific-stat-breakdown'>
                        <div className='create-stat-container'>
                            {/* FIRST STAR */}
                            <svg ref={hover1f} id={isHover1f ? 'one' : isHover2f ? 'two' : isHover3f ? 'three' : isHover4f ? 'four' : isHover5f ? 'five' : ''}
                                className={valRate > 4 ? 'create-review-svg green-machine' : valRate > 3 ? 'create-review-svg green-goblin' : valRate > 2 ? 'create-review-svg green-bean' : valRate > 1 ? 'create-review-svg lima-bean' : valRate > 0 ? 'create-review-svg edamame' : 'create-review-svg grey-bean'}
                                onClick={() => setValRate(1)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* SECOND STAR */}
                            <svg ref={hover2f} id={isHover1f ? 'grey' : isHover2f ? 'two' : isHover3f ? 'three' : isHover4f ? 'four' : isHover5f ? 'five' : ''}
                                className={valRate > 4 ? 'create-review-svg green-machine' : valRate > 3 ? 'create-review-svg green-goblin' : valRate > 2 ? 'create-review-svg green-bean' : valRate > 1 ? 'create-review-svg lima-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setValRate(2)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* THIRD STAR */}
                            <svg ref={hover3f} id={isHover1f ? 'grey' : isHover2f ? 'grey' : isHover3f ? 'three' : isHover4f ? 'four' : isHover5f ? 'five' : ''}
                                className={valRate > 4 ? 'create-review-svg green-machine' : valRate > 3 ? 'create-review-svg green-goblin' : valRate > 2 ? 'create-review-svg green-bean' : 'create-review-svg grey-bean'}
                                onClick={() => setValRate(3)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FOURTH STAR */}
                            <svg ref={hover4f} id={isHover1f ? 'grey' : isHover2f ? 'grey' : isHover3f ? 'grey' : isHover4f ? 'four' : isHover5f ? 'five' : ''}
                                className={valRate > 4 ? 'create-review-svg green-machine' : valRate > 3 ? 'create-review-svg green-goblin' : 'create-review-svg grey-bean'}
                                onClick={() => setValRate(4)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg>
                            {/* FIFTH STAR */}
                            <svg ref={hover5f} id={isHover1f ? 'grey' : isHover2f ? 'grey' : isHover3f ? 'grey' : isHover4f ? 'grey' : isHover5f ? 'five' : ''}
                                className={valRate > 4 ? 'create-review-svg green-machine' : 'create-review-svg grey-bean'}
                                onClick={() => setValRate(5)}
                                viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                style={{'height': '18px', 'width': '18px'}}>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                                9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                                7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                                </path>
                            </svg><span className={errors.includes('val') ? 'required-span' : 'invisible-span'}>*Required</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='create-body-container'>
                <span className='create-input-title'>Describe your experience</span>
                <span className={char === 0 ? 'create-input-limit red-limit' : 'create-input-limit'}>{char} {char === 1 ? 'character' : 'characters'} left</span>
                <textarea
                    id='review-body'
                    value={revBody}
                    maxLength='500'
                    required
                    className='edge-form-field create-review-field'
                    onChange={(e) => setRevBody(e.target.value.trimStart())}
                    />
            </div>
            <div className='create-review-submit-button-section'>
                <span className={errors.includes('body') ? 'required-span' : 'invisible-span'}>*Review description is required</span>
                <button id='create-review-submit' onClick={handleSubmit}>Post Review</button>
            </div>
        </div>
    </div>
  )
}

export default CreateReview;

function useHover() {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener('mouseover', handleMouseOver);
          node.addEventListener('mouseout', handleMouseOut);

          return () => {
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseout', handleMouseOut);
          };
        }
      },
      [ref.current] // Recall only if ref changes
    );

    return [ref, value];
  }
