import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css';

const Budget = () => {
    const { budget, expenses, dispatch, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [warning, setWarning] = useState('');

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        setWarning('');
    };

    const handleBudgetSubmit = () => {
        const value = parseInt(newBudget);
        if (isNaN(value)) {
            alert("Please enter a valid number");
            setNewBudget(budget);
            return;
        }
        if (value <= 20000 && value >= totalExpenses) {
            dispatch({ type: 'SET_BUDGET', payload: value });
        } else if (value < totalExpenses) {
            alert(`Value cannot be less than the total expenses of ${Location}${totalExpenses}`);
            setNewBudget(budget);
        } else {
            setWarning(`Value cannot exceed ${Location}20000`);
            setNewBudget(budget);
        }
    };

    return (
        <div className="modern-box">
            <div className="modern-box-content">
                <div className="modern-box-header">Budget</div>
                <div className="modern-box-value">
                    <span className="currency-symbol">{Location}</span>
                    <input
                        type="number"
                        step="10"
                        max="20000"
                        value={newBudget}
                        onChange={handleBudgetChange}
                        className="modern-box-input"
                    />
                </div>
                <button onClick={handleBudgetSubmit} className="modern-box-button">
                    Set Budget
                </button>
            </div>
            {warning && <div className="modern-box-warning">{warning}</div>}
            
        </div>
    );
};

export default Budget;