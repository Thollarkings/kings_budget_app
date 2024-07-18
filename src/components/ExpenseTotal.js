import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const ExpenseTotal = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const boxStyle = {
        background: 'linear-gradient(45deg, #6a1b9a, black)',
        color: 'white',
        padding: '25px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        maxWidth: '400px',  // Set a maximum width
        margin: '20px auto', // Center the box horizontally and add vertical margin
        marginLeft: '20px'  // Left margin to position the box to the left of the page
    };

    return (
        <div style={boxStyle}>
            <span>Spent so far: {Location}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;