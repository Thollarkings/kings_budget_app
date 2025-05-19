import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import './styles.css';

const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleDeleteExpense = () => {
        if (window.confirm(`Are you sure you want to delete the expense for ${props.name}?`)) {
            dispatch({
                type: 'DELETE_EXPENSE',
                payload: { id: props.id },
            });
        }
    };

    const increaseAllocation = (name, amount) => {
        const expense = {
            name: name,
            cost: amount,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const reduceAllocation = (name, amount) => {
        const expense = {
            name: name,
            cost: amount,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <div className="expense-item">
            <div className="expense-name">{props.name}</div>
            <div className="expense-cost">{Location}{props.cost}</div>
            <div className="expense-buttons">
                <FaAngleDoubleUp
                    onClick={() => increaseAllocation(props.name, 10)}
                    className="expense-icon increase"
                    aria-label={`Increase allocation for ${props.name}`}
                />
                <FaAngleDoubleDown
                    onClick={() => reduceAllocation(props.name, 10)}
                    className="expense-icon decrease"
                    aria-label={`Reduce allocation for ${props.name}`}
                />
                <TiDelete
                    onClick={handleDeleteExpense}
                    className="expense-icon delete"
                    aria-label={`Delete ${props.name} expense`}
                />
            </div>
        </div>
    );
};

export default ExpenseItem;