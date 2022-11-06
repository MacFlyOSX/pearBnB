import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addListing } from '../../store/listings';
import './CreateListing.css';

const CreateListing = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user);

    const [ name, setName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ description, setDescription ] = useState("");
    // const [country, setCountry] = useState("United States");
    const [ max_guests, setMaxGuests ] = useState(1);
    const [ bed, setBed ] = useState(1);
    const [ bath, setBath ] = useState(1);
    const [ price, setPrice ] = useState('');
    const [ types, setTypes ] = useState([]);
    const [ amenities, setAmenities ] = useState([]);
    const [ url, setUrl ] = useState('');
    const [ url2, setUrl2 ] = useState('');
    const [ url3, setUrl3 ] = useState('');
    const [ url4, setUrl4 ] = useState('');
    const [ url5, setUrl5 ] = useState('');
    const [ images, setImages ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ char, setChar ] = useState(600);
    const [ validationErrors, setValidationErrors ] = useState([]);

    console.log('you are on page: ', page);

    if (!user) {
        alert("Please log in or create an account to host a listing.");
        history.push("/");
    }

    useEffect(() => {
        setChar(600 - description.length);
    }, [description]);
    const [ nameLimit, setNameLimit ] = useState(60);
    useEffect(() => {
      setNameLimit(60-name.length);
    }, [name]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validationErrors.length) {
            return;
        }

        console.log('here are your images', images)

        const payload = {
            name, address, city, state, description, price, max_guests, bed, bath, types, amenities
        };

        const newListing = await dispatch(addListing(payload, images));

        if (newListing) history.replace(`/listings/${newListing.id}`);
    }

    const turnPage1 = () => {
        let tempName = name;
        let tempAddy = address;
        let tempCity = city;
        let tempDescrip = description;
        setName(tempName.trim().split(/[\s,\t,\n]+/).join(' '));
        console.log('here is your name:',name);
        console.log('here is your name:',typeof name);
        setAddress(tempAddy.trim().split(/[\s,\t,\n]+/).join(' '));
        setCity(tempCity.trim().split(/[\s,\t,\n]+/).join(' '));
        setDescription(tempDescrip.trim().split(/[\s,\t,\n]+/).join(' '));
        let errors = [];
        if (!name) {
            errors.push('Please enter a listing title.')
            console.log('this name error is hitting')
            console.log(errors)
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
            setPage(2);
        }
    }

    const turnPage2 = () => {
        console.log('you are in turnPage2');
        let errors = [];
        if (!types.length) {
            errors.push('Please select at least one type for your listing.')
        }
        if (!price) {
            errors.push('Please enter a price per night for your listing.')
        }
        let imageUrls = [];
        // let acceptable = ['.png', '.jpg', '.jpeg'];
        if (url.length) {
            setUrl(url.trim());
            if (!url.endsWith('.png') && !url.endsWith('.jpg') && !url.endsWith('.jpeg')) {
                errors.push('Please enter a valid image URL for image #1.')
            } else {
                imageUrls.push(url);
            }
        } else errors.push('Please provide a valid image URL for image #1.')
        if (url2.length) {
            setUrl2(url2.trim());
            if (!url2.endsWith('.png') && !url2.endsWith('.jpg') && !url2.endsWith('.jpeg')) {
            errors.push('Please enter a valid image URL for image #2.')
            } else {
                imageUrls.push(url2);
            }
        }
        if (url3.length) {
            setUrl3(url3.trim());
            if (!url3.endsWith('.png') && !url3.endsWith('.jpg') && !url3.endsWith('.jpeg')) {
            errors.push('Please enter a valid image URL for image #3.')
            } else {
                imageUrls.push(url3);
            }
        }
        if (url4.length) {
            setUrl4(url4.trim());
            if (!url4.endsWith('.png') && !url4.endsWith('.jpg') && !url4.endsWith('.jpeg')) {
            errors.push('Please enter a valid image URL for image #4.')
            } else {
                imageUrls.push(url4);
            }
        }
        if (url5.length) {
            setUrl5(url5.trim());
            if (!url5.endsWith('.png') && !url5.endsWith('.jpg') && !url5.endsWith('.jpeg')) {
            errors.push('Please enter a valid image URL for image #5.')
            } else {
                imageUrls.push(url5);
            }
        }
        if (imageUrls.length) setImages(imageUrls);
        if(errors.length > 0) {
            console.log('you got errors');
            return setValidationErrors(errors);
        } else {
            console.log('you got no errors');
            setValidationErrors([]);
            setPage(3);
        }

    }

    const _types = [ ['omg', 'OMG!'], ['luxe', 'Luxe'], ['beach', 'Beachfront'], ['mansions', 'Mansions'], ['cabins', 'Cabins'], ['countryside', 'Countryside'], ['desert', 'Desert'], ['lakefront', 'Lakefront'], ['tinyhomes', 'Tiny homes'], ['castles', 'Castles'], ['containers', 'Containers'], ['camping', 'Camping'], ['skiing', 'Skiing'], ['islands', 'Islands'] ];
    const _amenities = [ ['ac', 'Air conditioning'], ['bbq', 'BBQ grill'], ['coffee', 'Coffee maker'], ['firepit', 'Fire pit'], ['fireplace', 'Indoor fireplace'], ['heat', 'Heating'], ['hottub', 'Private hot tub'], ['kitchen', 'Kitchen'], ['outdoor', 'Outdoor furniture'], ['pets', 'Pets welcome'], ['pool', 'Private pool'], ['tv', 'TV'], ['wifi', 'Wifi'], ['workspace', 'Dedicated workspace'] ];

  return (
    <div className='listing-form-page'>
    <div className='listing-form-container'>
        {/* <div className='listing-form-header'>
            <h1 id='form-title'>
                Hey {user?.first_name}! Let's list your place!
            </h1>
        </div> */}
        <form id='listing-create-form' onSubmit={handleSubmit}>
            {page === 1 ? <div className='listing-form-basics listing-form-section'>
                <div className='lform-left'>
                    <h2 className='listing-form-section-title'>
                        We'll start with the basics
                    </h2>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing title</span>
                        <span className={nameLimit === 0 ? 'form-input-limit red-limit' : 'form-input-limit'}>{nameLimit} {nameLimit === 1 ? 'character' : 'characters'} left</span>
                        <input
                            id='listing-name'
                            type='text'
                            maxLength='60'
                            value={name}
                            required
                            className='edge-form-field form-field'
                            onChange={(e) => setName(e.target.value.trimStart())}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Address</span>
                        <input
                            id='listing-addy'
                            type='text'
                            maxLength='40'
                            value={address}
                            required
                            className='edge-form-field form-field'
                            onChange={(e) => setAddress(e.target.value.trimStart())}
                            />
                    </div>
                    <div className='combined-input-container'>
                        <div className='input-container split-left-input-container'>
                            <span className='form-input-title'>City</span>
                            <input
                                id='listing-city'
                                type='text'
                                maxLength='20'
                                value={city}
                                required
                                className='form-field'
                                onChange={(e) => setCity(e.target.value.trimStart())}
                                />
                        </div>
                        <div className='input-container split-right-input-container'>
                            <span className='form-input-title'>State</span>
                            <select
                              className='form-field'
                              id='listing-state'
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              required
                            >
                              <option disabled value=''></option>
                              <option value='AL'>AL</option>
                              <option value='AK'>AK</option>
                              <option value='AR'>AR</option>
                              <option value='AZ'>AZ</option>
                              <option value='CA'>CA</option>
                              <option value='CO'>CO</option>
                              <option value='CT'>CT</option>
                              <option value='DC'>DC</option>
                              <option value='DE'>DE</option>
                              <option value='FL'>FL</option>
                              <option value='GA'>GA</option>
                              <option value='HI'>HI</option>
                              <option value='IA'>IA</option>
                              <option value='ID'>ID</option>
                              <option value='IL'>IL</option>
                              <option value='IN'>IN</option>
                              <option value='KS'>KS</option>
                              <option value='KY'>KY</option>
                              <option value='LA'>LA</option>
                              <option value='MA'>MA</option>
                              <option value='MD'>MD</option>
                              <option value='ME'>ME</option>
                              <option value='MI'>MI</option>
                              <option value='MN'>MN</option>
                              <option value='MO'>MO</option>
                              <option value='MS'>MS</option>
                              <option value='MT'>MT</option>
                              <option value='NC'>NC</option>
                              <option value='ND'>ND</option>
                              <option value='NE'>NE</option>
                              <option value='NH'>NH</option>
                              <option value='NJ'>NJ</option>
                              <option value='NM'>NM</option>
                              <option value='NV'>NV</option>
                              <option value='NY'>NY</option>
                              <option value='OH'>OH</option>
                              <option value='OK'>OK</option>
                              <option value='OR'>OR</option>
                              <option value='PA'>PA</option>
                              <option value='RI'>RI</option>
                              <option value='SC'>SC</option>
                              <option value='SD'>SD</option>
                              <option value='TN'>TN</option>
                              <option value='TX'>TX</option>
                              <option value='UT'>UT</option>
                              <option value='VA'>VA</option>
                              <option value='VT'>VT</option>
                              <option value='WA'>WA</option>
                              <option value='WI'>WI</option>
                              <option value='WV'>WV</option>
                              <option value='WY'>WY</option>
                            </select>
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
                            className='edge-form-field form-field'
                            onChange={(e) => setDescription(e.target.value.trimStart())}
                            />
                    </div>
                </div>
                <div className='lform-right'>
                    <div className='basic-advice'>
                {validationErrors.length > 0 ?
                      <div className='listing-errors'>
                        Please fix the following error(s):
                        <ul className="errors-list">
                          {validationErrors.map(error => <li className="listing-error" key={error}>{error}</li>)}
                        </ul>
                      </div>
                    :<span>
                    Your listing is how potential guests find and book the space you want to share.
                    <br /> <br />
                    Photographs are helpful, but they’re only part of the equation—your listing name is the first thing to appear in results. Is your place near special events or points of interest? If so, you can help visitors find the perfect place for their trip by changing your title to be relevant for those events or attractions.
                    <br /> <br />
                    Try sitting with a friend and describing what it’s like to stay at your place. What are the qualities that come to mind? What are the elements that draw a reaction from your friend?
                    </span>
                    }
                    </div>
                </div>
                <div className='listing-button-section first-page-button'>
                    <button onClick={turnPage1} className='listing-next-button'>Next</button>
                </div>
            </div> : null}
            {page === 2 ? <div className='listing-form-pricetype listing-form-section'>
                <div className='lform-left'>
                    <h2 className='listing-form-section-title'>
                        Now onto the eye-catchers
                    </h2>
                    <div className='input-container full-select-container'>
                        <span className='form-input-title'>Listing types</span>
                        {_types.map((type, i) => (
                            <div key={i} className='single-type-input'>
                                <input
                                    type='checkbox'
                                    className='listing-checkbox type-checkbox'
                                    onChange={(e) => e.target.checked ? setTypes([...types, type[0]]) : setTypes([...types.slice(0,types.indexOf(type[0])), ...types.slice(types.indexOf(type[0])+1)])}
                                    value={type[0]}
                                    name={type[0]}
                                    checked={types.includes(type[0])}
                                />
                                <label htmlFor={type[0]}
                                className='listing-checkbox-label'
                                onClick={() => types.includes(type[0]) ? setTypes([...types.slice(0,types.indexOf(type[0])), ...types.slice(types.indexOf(type[0])+1)]) : setTypes([...types, type[0]])}>
                                {type[1]}</label>
                            </div>
                        ))}
                    </div>
                    <div className='input-container full-input-container'>
                        <div className='input-container full-input-container'>
                            <span className='form-input-title'>Price per night</span>
                            <span className='form-input-dollar'>$</span>
                            <div className='container-for-price'>
                                <input
                                    id='listing-price'
                                    type='number'
                                    value={price}
                                    required
                                    min='20'
                                    max='10000'
                                    className='form-field'
                                    onChange={(e) => setPrice(e.target.value)}
                                    />
                                <span className='price-advice'>Make sure your price is competitive with similar listings in your area.</span>
                            </div>
                        </div>
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing image URL #1</span>
                        <input
                            id='listing-img1'
                            type='text'
                            required
                            className='edge-form-field form-field'
                            onChange={(e) => setUrl(e.target.value)}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing image URL #2</span>
                        <input
                            id='listing-img2'
                            type='text'
                            placeholder='Optional'
                            className='edge-form-field form-field'
                            onChange={(e) => setUrl2(e.target.value)}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing image URL #3</span>
                        <input
                            id='listing-img3'
                            type='text'
                            placeholder='Optional'
                            className='edge-form-field form-field'
                            onChange={(e) => setUrl3(e.target.value)}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing image URL #4</span>
                        <input
                            id='listing-img4'
                            type='text'
                            placeholder='Optional'
                            className='edge-form-field form-field'
                            onChange={(e) => setUrl4(e.target.value)}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing image URL #5</span>
                        <input
                            id='listing-img5'
                            type='text'
                            placeholder='Optional'
                            className='edge-form-field form-field'
                            onChange={(e) => setUrl5(e.target.value)}
                            />
                    </div>
                </div>
                <div className='lform-right second-page-right'>
                    <div className='basic-advice'>
                    {validationErrors.length > 0 ?
                          <div className='listing-errors'>
                            Please fix the following error(s):
                            <ul className="errors-list">
                              {validationErrors.map(error => <li className="listing-error" key={error}>{error}</li>)}
                            </ul>
                          </div>
                        :<span>
                        Your listing type(s) and price are some of the most important 'searchable' aspects of your home!
                        <br /> <br />
                        Your five photos should highlight your home’s best features. Do you have a fireplace, hot tub, amazing views from your porch, or an incredible kitchen?<br />If so, highlight them upfront.
                        <br /> <br />
                        Once you’ve cleaned and decorated your space, you’re ready to start taking photos. Pick a time during the day that allows you to photograph in natural light. Then, open your curtains and let the light in. While it might be tempting to use a flash, natural light is more appealing in photographs.
                        </span>
                        }
                    </div>
                </div>
                <div className='listing-button-section'>
                <button onClick={turnPage2} className='listing-next-button'>Next</button>
                </div>
            </div> : null}
            {page === 3 ? <div className='listing-form-specifics listing-form-section'>
                <div className='lform-left'>
                    <h2 className='listing-form-section-title'>
                        And finally the specifics
                    </h2>
                    <div className='combined-input-container'>
                        <div className='input-container equal-split-input-container'>
                            <span className='form-input-title'>Number of beds</span>
                            <select
                                id='listing-bed'
                                type='text'
                                value={bed}
                                required
                                className='form-field'
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
                        <div id='middle-bath-container' className='input-container equal-split-input-container'>
                            <span className='form-input-title'>Number of bathrooms</span>
                            <select
                                id='listing-bath'
                                type='text'
                                value={bath}
                                required
                                className='form-field'
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
                        <div className='input-container equal-split-input-container'>
                            <span className='form-input-title'>Max number of guests</span>
                            <select
                                id='listing-guests'
                                type='text'
                                value={max_guests}
                                required
                                className='form-field'
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
                    </div>
                    <div className='input-container full-amenity-container'>
                        <span className='form-input-title'>Amenities offered</span>
                        {_amenities.map((amenity, i) => (
                            <div key={i} className='single-type-input'>
                                <input
                                    type='checkbox'
                                    className='listing-checkbox amenity-checkbox'
                                    onChange={(e) => e.target.checked ? setAmenities([...amenities, amenity[0]]) : setAmenities([...amenities.slice(0,amenities.indexOf(amenity[0])), ...amenities.slice(amenities.indexOf(amenity[0])+1)])}
                                    value={amenity[0]}
                                    name={amenity[0]}
                                    checked={amenities.includes(amenity[0])}
                                />
                                <label htmlFor={amenity[0]}
                                className='listing-checkbox-label'
                                onClick={() => amenities.includes(amenity[0]) ? setAmenities([...amenities.slice(0,amenities.indexOf(amenity[0])), ...amenities.slice(amenities.indexOf(amenity[0])+1)]) : setAmenities([...amenities, amenity[0]])}>
                                {amenity[1]}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='lform-right final-listing-section'>
                    <div className='basic-advice'>
                        {validationErrors.length > 0 ?
                              <div className='listing-errors'>
                                Please fix the following error(s):
                                <ul className="errors-list">
                                  {validationErrors.map(error => <li className="listing-error" key={error}>{error}</li>)}
                                </ul>
                              </div>
                            :<span>
                            The specific aspects of your home might arguably be the most important parts of your listing!
                            <br /> <br />
                            Your number of beds and bathrooms determine your max guest count. Make sure it's accurate so that you don't leave any potential renters confused.
                            <br /> <br />
                            Make sure that you select the amenities that your home offers. Guests are looking for what they can expect to have available to them during their stay!
                            </span>
                            }
                    </div>
                </div>
                <div className='listing-button-section'>
                    <button type='submit' id='create-listing-button'>Create Listing</button>
                </div>
            </div> : null}
        </form>
    </div>
    </div>
  )
}

export default CreateListing;
