import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const reduceAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td colSpan="4">
                <div className="expense-item">
                    <div className="expense-name">{props.name}</div>
                    <div className="expense-cost">{Location}{props.cost}</div>
                    <div className="expense-buttons">
                        <FaAngleDoubleUp 
                            onClick={() => increaseAllocation(props.name)} 
                            className="expense-icon increase"
                        />
                        <FaAngleDoubleDown 
                            onClick={() => reduceAllocation(props.name)} 
                            className="expense-icon decrease"
                        />
                        <TiDelete 
                            size='1.5em' 
                            onClick={handleDeleteExpense} 
                            className="expense-icon delete"
                        />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ExpenseItem;
