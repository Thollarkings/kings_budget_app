import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css';

const ExpenseTotal = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => (total += item.cost), 0);

    return (
        <div className="modern-box">
            <div className="modern-box-content">
                <div className="modern-box-header">Spent so far</div>
                <div className="modern-box-value">
                    <span className="currency-symbol">{Location}</span>
                    <span className="amount">{totalExpenses}</span>
                </div>
            </div>
        </div>
    );
};

export default ExpenseTotal;