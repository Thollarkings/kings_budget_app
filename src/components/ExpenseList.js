import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import './styles.css';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <div className="expense-list-container">
            <div className="expense-list-header">
                <h3>Department Allocations</h3>
                <p className="expense-list-info">
                    Use the arrows to adjust department budgets by ±10
                </p>
            </div>
            
            <div className="expense-list">
                {expenses.length > 0 ? (
                    expenses.map((expense) => (
                        <ExpenseItem 
                            id={expense.id} 
                            key={expense.id} 
                            name={expense.name} 
                            cost={expense.cost} 
                        />
                    ))
                ) : (
                    <div className="no-expenses">
                        <p>No departments added yet</p>
                        <p className="no-expenses-sub">Add a department to get started</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpenseList;