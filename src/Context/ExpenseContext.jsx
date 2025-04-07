import React from 'react';

import { createContext, useState, useEffect, useContext } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem("expenses");
        //localStorage.clear();  uncomment this code if you want to clear your table, coz it could be plenty entry
        return savedExpenses ? JSON.parse(savedExpenses) : []; 
    });

    const addExpense = (newExpense) => {
        setExpenses((prev) => {
            // Add a unique ID to the new expense
            const expenseWithId = {
                ...newExpense,
                id: Date.now()  // Use timestamp as a unique ID
            };
            const updatedExpenses = [...prev, expenseWithId];
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses)); 
            console.log("Updated Expenses:", updatedExpenses);
            return updatedExpenses;
        });
    };

    const deleteExpense = (id) => {
        setExpenses((prev) => {
            const updatedExpenses = prev.filter(expense => expense.id !== id);
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
            return updatedExpenses;
        });
    };

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};

// Creating custom hook
export const useExpenseContext = () => {
    return useContext(ExpenseContext);
};
