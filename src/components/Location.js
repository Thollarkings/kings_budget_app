import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        });
    };

    const boxStyle = {
        background: 'linear-gradient(45deg, #6a1b9a, black)',
        color: 'white',
        padding: '12px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Corrected this line
        maxWidth: '400px',
        margin: '20px auto',
        marginLeft: '20px'
    };

    return (
        <div style={boxStyle}>
            <label htmlFor="Location">Select Currency:</label>
            <select name="Location" id="Location" onChange={event => changeLocation(event.target.value)}>
                <option value="$">($) Dollars</option>
                <option value="£">(£) Pounds</option>
                <option value="₹">(₹) Rupees</option>
                <option value="€">(€) Euro</option>
            </select>
        </div>
    );
};

export default Location;
