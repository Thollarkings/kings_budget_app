import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            const totalBudget = state.expenses.reduce((previousExp, currentExp) => {
                return previousExp + currentExp.cost;
            }, 0) + action.payload.cost;

            if (totalBudget <= state.budget) {
                const updatedExpenses = state.expenses.map((currentExp) => {
                    if (currentExp.name === action.payload.name) {
                        return { ...currentExp, cost: currentExp.cost + action.payload.cost };
                    }
                    return currentExp;
                });

                return {
                    ...state,
                    expenses: updatedExpenses,
                };
            } else {
                alert("Cannot increase the allocation beyond the remaining funds!");
                return state;
            }

        case 'RED_EXPENSE':
            const redExpenses = state.expenses.map((currentExp) => {
                if (currentExp.name === action.payload.name && currentExp.cost - action.payload.cost >= 0) {
                    return { ...currentExp, cost: currentExp.cost - action.payload.cost };
                }
                return currentExp;
            });

            return {
                ...state,
                expenses: redExpenses,
            };

        case 'DELETE_EXPENSE':
            const updatedExpensesAfterDeletion = state.expenses.map((currentExp) => {
                if (currentExp.name === action.payload) {
                    return { ...currentExp, cost: 0 };
                }
                return currentExp;
            });

            return {
                ...state,
                expenses: updatedExpensesAfterDeletion,
            };

        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        case 'CHG_LOCATION':
            return {
                ...state,
                Location: action.payload,
            };

        default:
            return state;
    }
};


// 1. Sets the initial state when the app loads
const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    Location: '₦', // Assuming Location is meant to represent currency symbol
};

const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
const AppProvider = ({ children }) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const remaining = state.budget - totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                Location: state.Location, // Corrected to Location
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
