import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css'; // Import the CSS file

const Remaining = () => {
    const { remaining, Location } = useContext(AppContext);

    return (
        <div className="box">
            <span>Remaining: {Location} {remaining}</span>
        </div>
    );
};

export default Remaining;