import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';
import { AppProvider } from './context/AppContext';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import Location from './components/Location';
import Footer from './components/Footer';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Thollarkings' Budget Allocator</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <Location />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h4 className='mt-3'>Change/Add Allocation</h4>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
            <Footer />
        </AppProvider>
    );
};

export default App;
