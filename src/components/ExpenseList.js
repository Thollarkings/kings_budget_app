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
                            <th >The allocated budget can be increased by 10 or decreased by 10 by clicking the green up arrows or the red down arrows.</th>

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