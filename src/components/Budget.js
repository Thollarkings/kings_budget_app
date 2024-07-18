import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const value = parseInt(newBudget);
            if (isNaN(value)) {
                alert("Please enter a valid number");
                setNewBudget(budget); // Reset to current budget
                return;
            }
            if (value <= 20000 && value >= totalExpenses) {
                dispatch({ type: 'SET_BUDGET', payload: value });
            } else if (value < totalExpenses) {
                alert(`Value cannot be less than the total expenses of ${Location}${totalExpenses}`);
                setNewBudget(budget); // Reset to current budget
            } else {
                alert(`Value cannot exceed ${Location}20000`);
                setNewBudget(budget); // Reset to current budget
            }
        }
    };

    const boxStyle = {
        background: 'linear-gradient(45deg, #6a1b9a, black)',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '400px', // Set a maximum width
        margin: '20px auto', // Center the box horizontally and add vertical margin
    };

    const labelStyle = {
        marginRight: '10px', // Margin between Budget text and input
    };

    const inputStyle = {
        padding: '5px',
        border: 'none',
        borderRadius: '5px',
        width: '100px', // Adjust width as needed
    };

    return (
        <div style={boxStyle}>
            <span style={labelStyle}>Budget: {Location}{budget}</span>
            <input
                type="number"
                step="10"
                max="20000"
                value={newBudget}
                onChange={handleBudgetChange}
                onKeyPress={handleKeyPress}
                style={inputStyle}
            />
        </div>
    );
};

export default Budget;
