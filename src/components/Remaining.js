import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { remaining, Location } = useContext(AppContext);

    const boxStyle = {
        background: 'linear-gradient(45deg, #6a1b9a, black)',
        color: 'white',
        padding: '25px',
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
            <span>Remaining: {Location} {remaining}</span> {/* Added a space between Location and remaining */}
        </div>
    );
};

export default Remaining;
