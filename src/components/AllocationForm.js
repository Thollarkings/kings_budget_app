import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css'; // Import the CSS file

const AllocationForm = () => {
    const { dispatch, remaining, Location } = useContext(AppContext);
    const [department, setDepartment] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');
    const [customDepartment, setCustomDepartment] = useState(''); // New state for custom department name

    const handleDepartmentChange = (event) => {
        const selectedValue = event.target.value;
        setDepartment(selectedValue);

        // Clear custom department input if a predefined department is selected
        if (selectedValue !== "Other") {
            setCustomDepartment('');
        }
    };

    const submitEvent = () => {
        if (cost === '' || isNaN(parseInt(cost))) {
            alert('Please enter a valid number for Allocation.');
            return;
        }

        const expense = {
            name: department === "Other" ? customDepartment : department, // Use custom department name
            cost: parseInt(cost),
        };

        // Validate the reduction action
        if (action === 'Reduce' && expense.cost > remaining) {
            alert(`The value cannot exceed remaining funds ${Location}${remaining}`);
            return;
        }

        // Dispatch the appropriate action
        dispatch({
            type: action === 'Reduce' ? 'RED_EXPENSE' : 'ADD_EXPENSE',
            payload: expense,
        });

        // Reset form fields after submission
        setDepartment('');
        setCost('');
        setCustomDepartment(''); // Reset custom department name
    };

    return (
        <div className="containers">
            <div className='budgetAllcCont'>
            <h5>Budget Allocation</h5>
            <div className='row'>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select 
                        className="custom-select" 
                        id="inputGroupSelect01" 
                        value={department} 
                        onChange={handleDepartmentChange}
                    >
                        <option disabled value="">Choose...</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Admin">Admin</option>
                        <option value="Other">Other (Specify Below)</option>
                    </select>

                    {department === "Other" && (
                        <input
                            type='text'
                            placeholder='Enter department name'
                            className='form-control'
                            value={customDepartment} // Use customDepartment state
                            onChange={(event) => setCustomDepartment(event.target.value)}
                            style={{ marginLeft: '1rem', width: '150px' }}
                        />
                    )}

                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select 
                        className="custom-select" 
                        id="inputGroupSelect02" 
                        value={action} 
                        onChange={(event) => setAction(event.target.value)}
                    >
                        <option value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>

                    <input
                        required
                        type='number'
                        id='cost'
                        value={cost}
                        className='form-control'
                        onChange={(event) => setCost(event.target.value)}
                        style={{ marginLeft: '1rem', width: '100px' }}
                    />

                    <span className="input-group-text">{Location}</span>

                    <button
                        className="btn-button"
                        onClick={submitEvent}>
                        Update
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;