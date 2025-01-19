import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css'; // Import the CSS file

const Budget = () => {
    const { budget, expenses, dispatch, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [warning, setWarning] = useState('');

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        setWarning(''); // Clear warning when input changes
    };

    const handleBudgetSubmit = () => {
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
            setWarning(`Value cannot exceed ${Location}20000`);
            setNewBudget(budget); // Reset to current budget
        }
    };

    return (
        <div className="box">
            <span className="label">Budget: {Location}{budget}</span>
            <input
                type="number"
                step="10"
                max="20000"
                value={newBudget}
                onChange={handleBudgetChange}
                className="input" // Use the CSS class
            />
            <button onClick={handleBudgetSubmit} className="button"> {/* Use the CSS class */}
                Set Budget
            </button>
            {warning && <div className="warning">{warning}</div>} {/* Use the CSS class */}
        </div>
    );
};

export default Budget;