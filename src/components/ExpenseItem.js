import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa'; // Correctly import the icons
import { AppContext } from '../context/AppContext';

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

    const boxStyle = {
        background: 'linear-gradient(45deg, #9575CD, #D1C4E9)', // Light purple gradient
        color: 'black',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const nameStyle = {
        flex: '0.23',
        textAlign: 'left',
    };

    const costStyle = {
        flex: '0.23',
        marginLeft: '10px',
    };

    const buttonsStyle = {
        flex: '0.53',
        display: 'flex',
        gap: '240px',
        marginLeft: 'auto',

    
    };

    return (
        <tr>
            <td colSpan="4">
                <div style={boxStyle}>
                    <td style={nameStyle}>{props.name}</td>
                    <td style={costStyle}>{Location}{props.cost}</td>
                    <div style={buttonsStyle}>
                    <td>
                    <FaAngleDoubleUp 
                                 onClick={() => increaseAllocation(props.name)} 
                               style={{ color: 'green', marginRight: '5px', fontSize: '30px', cursor: 'pointer' }} 
                               />
                            </td>
                            <td>
                            <FaAngleDoubleDown 
                                onClick={() => reduceAllocation(props.name)} 
                                style={{ color: 'brown', marginRight: '5px', fontSize: '30px', cursor: 'pointer' }} 
                            />
                        </td>
                        <TiDelete size='1.5em' onClick={handleDeleteExpense} style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px' }} />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ExpenseItem;
