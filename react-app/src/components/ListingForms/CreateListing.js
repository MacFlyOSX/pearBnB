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
    const [ max_guests, setMaxGuests ] = useState(0);
    const [ bed, setBed ] = useState(0);
    const [ bath, setBath ] = useState(0);
    const [ price, setPrice ] = useState('');
    const [ types, setTypes ] = useState([]);
    const [ amenities, setAmenities ] = useState([]);
    const [ images, SetImages ] = useState([]);

    console.log('these are the selected types:',types)

    const _types = [ ['omg', 'OMG!'], ['luxe', 'Luxe'], ['beach', 'Beachfront'], ['mansions', 'Mansions'], ['cabins', 'Cabins'], ['ryokans', 'Ryokans'], ['desert', 'Desert'], ['lakefront', 'Lakefront'], ['tinyhomes', 'Tiny homes'], ['castles', 'Castles'], ['containers', 'Containers'], ['camping', 'Camping'] ];
    const _amenities = [ ['ac', 'Air conditioning'], ['bbq', 'BBQ grill'], ['coffee', 'Coffee maker'], ['firepit', 'Fire pit'], ['fireplace', 'Indoor fireplace'], ['heat', 'Heating'], ['hottub', 'Private hot tub'], ['kitchen', 'Kitchen'], ['outdoor', 'Outdoor furniture'], ['pets', 'Pets welcome'], ['pool', 'Private pool'], ['tv', 'TV'], ['wifi', 'Wifi'], ['workspace', 'Dedicated workspace'] ];

  return (
    <div className='listing-form-page'>
    <div className='listing-form-container'>
        <div className='listing-form-header'>
            <h1 id='form-title'>
                Hey {user?.first_name}! Let's list your place!
            </h1>
        </div>
        <form id='listing-create-form'>
            <div className='listing-form-basics listing-form-section'>
                <div className='lform-left'>
                    <h2 className='listing-form-section-title'>
                        The basics
                    </h2>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing title</span>
                        <input
                            id='listing-name'
                            type='text'
                            value={name}
                            required
                            className='edge-form-field form-field'
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Address</span>
                        <input
                            id='listing-addy'
                            type='text'
                            value={address}
                            required
                            className='edge-form-field form-field'
                            onChange={(e) => setAddress(e.target.value)}
                            />
                    </div>
                    <div className='combined-input-container'>
                        <div className='input-container split-left-input-container'>
                            <span className='form-input-title'>City</span>
                            <input
                                id='listing-city'
                                type='text'
                                value={city}
                                required
                                className='form-field'
                                onChange={(e) => setCity(e.target.value)}
                                />
                        </div>
                        <div className='input-container split-right-input-container'>
                            <span className='form-input-title'>State</span>
                            <input
                                id='listing-state'
                                type='text'
                                value={state}
                                required
                                className='form-field'
                                onChange={(e) => setState(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Description</span>
                        <textarea
                            id='listing-description'
                            value={description}
                            required
                            className='edge-form-field form-field'
                            onChange={(e) => setDescription(e.target.value)}
                            />
                    </div>
                </div>
                <div className='lform-right'></div>
            </div>
            <div className='listing-form-pricetype listing-form-section'>
                <div className='lform-left'>
                    <h2 className='listing-form-section-title'>
                        The eye-catchers
                    </h2>
                    <div className='input-container full-select-container'>
                        <span className='form-input-title'>Listing types</span>
                        {_types.map(type => (
                            <div className='single-type-input'>
                                <input
                                    type='checkbox'
                                    className='listing-checkbox'
                                    onChange={(e) => types.includes(e.target.value) ? setTypes(types.splice(types.indexOf(e.target.value), 1)) : setTypes([...types, e.target.value])}
                                    value={type[0]}
                                    name={type[0]}
                                />
                                <label htmlFor={type[0]} className='listing-checkbox-label'>{type[1]}</label>
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
                            onChange={(e) => setAddress(e.target.value)}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing image URL #2</span>
                        <input
                            id='listing-img2'
                            type='text'
                            placeholder='Optional'
                            className='edge-form-field form-field'
                            onChange={(e) => setAddress(e.target.value)}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing image URL #3</span>
                        <input
                            id='listing-img3'
                            type='text'
                            placeholder='Optional'
                            className='edge-form-field form-field'
                            onChange={(e) => setAddress(e.target.value)}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing image URL #4</span>
                        <input
                            id='listing-img4'
                            type='text'
                            placeholder='Optional'
                            className='edge-form-field form-field'
                            onChange={(e) => setAddress(e.target.value)}
                            />
                    </div>
                    <div className='input-container full-input-container'>
                        <span className='form-input-title'>Listing image URL #5</span>
                        <input
                            id='listing-img5'
                            type='text'
                            placeholder='Optional'
                            className='edge-form-field form-field'
                            onChange={(e) => setAddress(e.target.value)}
                            />
                    </div>
                </div>
                <div className='lform-right'></div>
            </div>
            <div className='listing-form-specifics listing-form-section'>
                <div className='lform-left'>
                    <h2 className='listing-form-section-title'>
                        The specifics
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
                        {_amenities.map(type => (
                            <div className='single-type-input'>
                                <input
                                    type='checkbox'
                                    className='listing-checkbox'
                                    onChange={(e) => e.target.checked ? setTypes([...types, type[0]]) : setTypes([...types.slice(0,types.indexOf(type[0])), ...types.slice(types.indexOf(type[0])+1)])}
                                    value={type[0]}
                                    name={type[0]}
                                />
                                <label htmlFor={type[0]} className='listing-checkbox-label'>{type[1]}</label>
                            </div>
                        ))}
                    </div>
                    <button type='submit' id='create-listing-button'>Create Listing</button>
                </div>
                <div className='lform-right'></div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default CreateListing;
