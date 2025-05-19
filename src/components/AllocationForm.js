import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css';

const AllocationForm = () => {
    const { dispatch, remaining, Location } = useContext(AppContext);
    const [department, setDepartment] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');
    const [newDepartment, setNewDepartment] = useState('');
    const [departments, setDepartments] = useState([
        'Marketing', 'Sales', 'Finance', 'HR', 'IT', 'Admin'
    ]);

    const handleDepartmentChange = (event) => {
        const value = event.target.value;
        setDepartment(value);
    };

    const handleAddNewDepartment = () => {
        if (newDepartment && !departments.includes(newDepartment)) {
            setDepartments([...departments, newDepartment]);
            setDepartment(newDepartment);
            setNewDepartment('');
        }
    };

    const submitEvent = () => {
        if (cost === '' || isNaN(parseInt(cost))) {
            alert('Please enter a valid number for Allocation.');
            return;
        }

        if (!department) {
            alert('Please select or enter a department.');
            return;
        }

        const expense = {
            name: department,
            cost: parseInt(cost),
        };

        if (action === 'Reduce' && expense.cost > remaining) {
            alert(`The value cannot exceed remaining funds ${Location}${remaining}`);
            return;
        }

        dispatch({
            type: action === 'Reduce' ? 'RED_EXPENSE' : 'ADD_EXPENSE',
            payload: expense,
        });

        setCost('');
    };

    return (
        <div className="allocation-container">
            <div className="allocation-form">
                <h5>Budget Allocation</h5>
                
                <div className="form-group">
                    <label>Department</label>
                    <div className="department-input-group">
                        <select 
                            value={department}
                            onChange={handleDepartmentChange}
                            className="modern-select"
                        >
                            <option value="">Select Department</option>
                            {departments.map((dept) => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>New Department</label>
                    <div className="department-input-group">
                        <input
                            type="text"
                            value={newDepartment}
                            onChange={(e) => setNewDepartment(e.target.value)}
                            placeholder="Enter new department"
                            className="modern-input"
                        />
                        <button 
                            onClick={handleAddNewDepartment}
                            className="modern-button add-dept"
                            disabled={!newDepartment}
                        >
                            Add
                        </button>
                    </div>
                </div>

                <div className="form-group">
                    <label>Action</label>
                    <select 
                        value={action}
                        onChange={(e) => setAction(e.target.value)}
                        className="modern-select"
                    >
                        <option value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <div className="amount-input-group">
                        <span className="currency">{Location}</span>
                        <input
                            required
                            type="number"
                            value={cost}
                            className="modern-input"
                            onChange={(e) => setCost(e.target.value)}
                            placeholder="Enter amount"
                        />
                    </div>
                </div>

                <button
                    onClick={submitEvent}
                    className="modern-button submit"
                    disabled={!department || !cost}
                >
                    Update Budget
                </button>
            </div>
        </div>
    );
};

export default AllocationForm;