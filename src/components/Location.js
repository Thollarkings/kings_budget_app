import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css'; // Import the CSS file

const Location = () => {
    const { dispatch } = useContext(AppContext);

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        });
    };

    return (
        <div className="box">
            <label htmlFor="Location" className="label">Select Currency:</label>
            <select name="Location" id="Location" onChange={event => changeLocation(event.target.value)}>
                <option value="₦">(₦) Naira</option>
                <option value="$">($) Dollars</option>
                <option value="£">(£) Pounds</option>
                <option value="₹">(₹) Rupees</option>
                <option value="€">(€) Euro</option>
            </select>
        </div>
    );
};

export default Location;