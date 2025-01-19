import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import './styles.css'; // Import the CSS file

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <div>
            <div className="header-box">
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Department Allocated Budget Increase by 10 Reduce by 10</th>

                        </tr>
                    </thead>
                </table>
            </div>
            <table className='table'>
                <tbody>
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
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center' }}>No expenses found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;