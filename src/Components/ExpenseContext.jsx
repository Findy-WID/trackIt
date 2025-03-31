import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState(() => {
        // Load initial data from localStorage
        const savedExpenses = localStorage.getItem("expenses");
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    // Log expenses whenever they change
    useEffect(() => {
    }, [expenses]);

    const addExpense = (newExpense) => {
        setExpenses((prevExpenses) => {
            const updatedExpenses = [...prevExpenses, newExpense];
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
            console.log("Added new expense:", newExpense);
            console.log("All expenses:", updatedExpenses);
            return updatedExpenses;
        });
    };

    const value = {
        expenses,
        addExpense
    };

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    );
};