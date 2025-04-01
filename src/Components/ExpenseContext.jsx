import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem("expenses");
        return savedExpenses ? JSON.parse(savedExpenses) : []; 
    });

    const addExpense = (newExpense) => {
        setExpenses((prev) => {
            const updatedExpenses = [...prev, newExpense];
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses)); 
            console.log("Updated Expenses:", updatedExpenses);
            return updatedExpenses;
        });
    };

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};
