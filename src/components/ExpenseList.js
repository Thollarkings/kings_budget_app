import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import './ExpenseList.css';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const headerBoxStyle = {
        background: 'linear-gradient(45deg, #9575CD, #D1C4E9)', // Light purple gradient
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '10px',
    };

    return (
        <div>
            <div style={headerBoxStyle}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Department</th>
                            <th scope="col">Allocated Budget</th>
                            <th scope="col">Increase by 10</th>
                            <th scope="col">Reduce by 10</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <table className='table'>
                <tbody>
                    {expenses.map((expense) => (
                        <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
