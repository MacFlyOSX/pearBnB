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
    const [ price, setPrice ] = useState(0);
    const [ types, setTypes ] = useState([]);
    const [ amenities, setAmenities ] = useState([]);
    const [ images, SetImages ] = useState([]);

    const _types = [ ['omg', 'OMG!'], ['luxe', 'Luxe'], ['beach', 'Beachfront'], ['mansions', 'Mansions'], ['cabins', 'Cabins'], ['ryokans', 'Ryokans'], ['desert', 'Desert'], ['lakefront', 'Lakefront'], ['tinyhomes', 'Tiny homes'], ['castles', 'Castles'], ['containers', 'Containers'], ['camping', 'Camping'] ];
    const _amenities = [ ['ac', 'Air conditioning'], ['bbq', 'BBQ grill'], ['coffee', 'Coffee maker'], ['firepit', 'Fire pit'], ['fireplace', 'Indoor fireplace'], ['heat', 'Heating'], ['hottub', 'Private hot tub'], ['kitchen', 'Kitchen'], ['outdoor', 'Outdoor furniture'], ['pets', 'Pets welcome'], ['pool', 'Private pool'], ['tv', 'TV'], ['wifi', 'Wifi'], ['workspace', 'Dedicated workspace'] ];

  return (
    <div>
    </div>
  )
}

export default CreateListing;
