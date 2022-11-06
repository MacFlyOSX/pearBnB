import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOne, updateListing } from '../../store/listings';
import './UpdateListing.css';

const UpdateListing = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user);
    const listObj = useSelector(state => state.listings.singleListing);

    const [ name, setName ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ max_guests, setMaxGuests ] = useState(0);
    const [ bed, setBed ] = useState(0);
    const [ bath, setBath ] = useState(0);
    const [ price, setPrice ] = useState(null);
    const [ char, setChar ] = useState(600);
    const [ validationErrors, setValidationErrors ] = useState([]);
    const [ nameLimit, setNameLimit ] = useState(60);

    useEffect(() => {
        if (description)
            setChar(600 - description.length);
    }, [description]);
    useEffect(() => {
        if (name)
            setNameLimit(60-name.length);
    }, [name]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setName(name.trim());
        setAddress(address.trim());
        setCity(city.trim());
        setDescription(description.trim());
        let errors = [];
        if (!name) {
            errors.push('Please enter a listing title.')
            // console.log('this name error is hitting')
            // console.log(errors)
        }
        if (name.length < 10) {
            errors.push('Your listing title must be at least 10 characters.')
        }
        if (!address) {
            errors.push('Please enter an address for your listing.')
        }
        if (address.length < 5) {
            errors.push('Please enter a valid listing address.')
        }
        if (!city) {
            errors.push('Please enter a city for your listing.')
        }
        if (city.length < 3) {
            errors.push('Please enter a valid listing city.')
        }
        if (!state) {
            errors.push('Please enter a state for your listing.')
        }
        if (description.length < 50) {
            errors.push(`Your listing's description must be at least 50 characters.`)
        }
        if(errors.length > 0) return setValidationErrors(errors);

        else {
            setValidationErrors([]);

            const payload = {
                name, address, city, state, description, price, max_guests, bed, bath
            };

            const newListing = await dispatch(updateListing(listingId, payload));

            if (newListing) history.replace(`/listings/${newListing.id}`);
        }

    }

    useEffect(() => {
        setName(listObj?.name);
        setAddress(listObj?.address);
        setCity(listObj?.city);
        setState(listObj?.state);
        setDescription(listObj?.description);
        setMaxGuests(listObj?.max_guests);
        setBed(listObj?.bed);
        setBath(listObj?.bath);
        setPrice(listObj?.price);
    }, [listObj])


    useEffect(() => {
        dispatch(getOne(listingId));
    }, [dispatch]);

    if (!user) {
        history.push("/");
        alert("You must be logged in to update a listing.");
    }

    return (
      <div className='update-listing-container'>
          <div className='update-listing-inner'>
            <h1 id='update-listing-title'>Update your listing</h1>
            <form id='listing-update-form' onSubmit={handleSubmit}>
                <div className='input-container name-input-container'>
                    <span className='form-input-title'>Listing title</span>
                    <span className={nameLimit === 0 ? 'form-input-limit red-limit' : 'form-input-limit'}>{nameLimit} {nameLimit === 1 ? 'character' : 'characters'} left</span>
                    <input
                        id='update-name'
                        type='text'
                        maxLength='60'
                        value={name}
                        required
                        className='edge-form-field update-field'
                        onChange={(e) => setName(e.target.value.trimStart())}
                        />
                 </div>
                 <div className='input-container bed-input-container'>
                            <span className='form-input-title'>Number of beds</span>
                            <select
                                id='listing-bed'
                                type='text'
                                value={bed}
                                required
                                className='update-field'
                                onChange={(e) => setBed(e.target.value)}
                                >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                            </select>
                        </div>
                        <div id='middle-bath-container' className='input-container bath-input-container'>
                            <span className='form-input-title'>Number of bathrooms</span>
                            <select
                                id='listing-bath'
                                type='text'
                                value={bath}
                                required
                                className='update-field'
                                onChange={(e) => setBath(e.target.value)}
                                >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                            </select>
                        </div>
                        <div className='input-container guests-input-container'>
                            <span className='form-input-title'>Max number of guests</span>
                            <select
                                id='listing-guests'
                                type='text'
                                value={max_guests}
                                required
                                className='update-field'
                                onChange={(e) => setMaxGuests(e.target.value)}
                                >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                                <option value={16}>16</option>
                                <option value={17}>17</option>
                                <option value={18}>18</option>
                                <option value={19}>19</option>
                                <option value={20}>20</option>
                            </select>
                        </div>
                    <div className='input-container addy-input-container'>
                        <span className='form-input-title'>Address</span>
                        <input
                            id='listing-addy'
                            type='text'
                            maxLength='40'
                            value={address}
                            required
                            className='edge-form-field update-field'
                            onChange={(e) => setAddress(e.target.value.trimStart())}
                            />
                    </div>
                    <div className='input-container city-input-container'>
                        <span className='form-input-title'>City</span>
                        <input
                            id='listing-city'
                            type='text'
                            maxLength='20'
                            value={city}
                            required
                            className='update-field'
                            onChange={(e) => setCity(e.target.value.trimStart())}
                            />
                    </div>
                    <div className='input-container state-input-container'>
                        <span className='form-input-title'>State</span>
                        <select
                          className='update-field'
                          id='listing-state'
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          required
                        >
                          <option disabled value=''></option>
                          <option value='Alabama'>AL</option>
                          <option value='Alaska'>AK</option>
                          <option value='Arkansas'>AR</option>
                          <option value='Arizona'>AZ</option>
                          <option value='California'>CA</option>
                          <option value='Colorado'>CO</option>
                          <option value='Connecticut'>CT</option>
                          <option value='District of Columbia'>DC</option>
                          <option value='Delaware'>DE</option>
                          <option value='Florida'>FL</option>
                          <option value='Georgia'>GA</option>
                          <option value='Hawaii'>HI</option>
                          <option value='Iowa'>IA</option>
                          <option value='Idaho'>ID</option>
                          <option value='Illinois'>IL</option>
                          <option value='Indiana'>IN</option>
                          <option value='Kansas'>KS</option>
                          <option value='Kentucky'>KY</option>
                          <option value='Louisiana'>LA</option>
                          <option value='Massachusetts'>MA</option>
                          <option value='Maryland'>MD</option>
                          <option value='Maine'>ME</option>
                          <option value='Michigan'>MI</option>
                          <option value='Minnesota'>MN</option>
                          <option value='Missouri'>MO</option>
                          <option value='Mississippi'>MS</option>
                          <option value='Montana'>MT</option>
                          <option value='North Carolina'>NC</option>
                          <option value='North Dakota'>ND</option>
                          <option value='Nebraska'>NE</option>
                          <option value='New Hampshire'>NH</option>
                          <option value='New Jersey'>NJ</option>
                          <option value='New Mexico'>NM</option>
                          <option value='Nevada'>NV</option>
                          <option value='New York'>NY</option>
                          <option value='Ohio'>OH</option>
                          <option value='Oklahoma'>OK</option>
                          <option value='Oregon'>OR</option>
                          <option value='Pennsylvania'>PA</option>
                          <option value='Rhode Island'>RI</option>
                          <option value='South Carolina'>SC</option>
                          <option value='South Dakota'>SD</option>
                          <option value='Tennessee'>TN</option>
                          <option value='Texas'>TX</option>
                          <option value='Utah'>UT</option>
                          <option value='Virginia'>VA</option>
                          <option value='Vermont'>VT</option>
                          <option value='Washington'>WA</option>
                          <option value='Wisconsin'>WI</option>
                          <option value='West Virginia'>WV</option>
                          <option value='Wyoming'>WY</option>
                        </select>
                    </div>
                    <div className='input-container price-input-container'>
                        <span className='form-input-title'>Price per night</span>
                        <span className='update-input-dollar'>$</span>
                        <div className='container-for-price'>
                            <input
                                id='update-price'
                                type='number'
                                value={price}
                                required
                                min='20'
                                className='update-field'
                                onChange={(e) => setPrice(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Description</span>
                        <span className={char === 0 ? 'form-input-limit red-limit' : 'form-input-limit'}>{char} {char === 1 ? 'character' : 'characters'} left</span>
                        <textarea
                            id='listing-description'
                            value={description}
                            maxLength='600'
                            required
                            className='edge-form-field update-field'
                            onChange={(e) => setDescription(e.target.value.trimStart())}
                            />
                    </div>
                    <div className='update-button-section'>
                        <button id='update-listing-button-one' type='submit'>Update Listing</button>
                    </div>
            </form>
          </div>
      </div>
    )
}

export default UpdateListing;
