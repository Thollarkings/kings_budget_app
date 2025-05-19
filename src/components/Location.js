import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css';

const Location = () => {
    const { dispatch } = useContext(AppContext);

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        });
    };

    return (
        <div className="modern-box">
            <div className="modern-box-content">
                <div className="modern-box-header">Currency</div>
                <select 
                    className="modern-box-select"
                    onChange={event => changeLocation(event.target.value)}
                    defaultValue="₦"
                >
                    <option value="₦">Naira (₦)</option>
                    <option value="$">Dollar ($)</option>
                    <option value="£">Pound (£)</option>
                    <option value="₹">Rupee (₹)</option>
                    <option value="€">Euro (€)</option>
                </select>
            </div>
        </div>
    );
};

export default Location;