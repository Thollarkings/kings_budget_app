import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css'; // Import the CSS file

const ExpenseTotal = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => (total += item.cost), 0);

    return (
        <div className="box">
            <span>Spent so far: {Location} {totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;