import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css';

const Remaining = () => {
    const { remaining, Location } = useContext(AppContext);

    return (
        <div className="modern-box">
            <div className="modern-box-content">
                <div className="modern-box-header">Remaining</div>
                <div className="modern-box-value">
                    <span className="currency-symbol">{Location}</span>
                    <span className="amount">{remaining}</span>
                </div>
            </div>
        </div>
    );
};

export default Remaining;