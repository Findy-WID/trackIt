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

// ✅ Create the custom hook
export const useExpenseContext = () => {
    return useContext(ExpenseContext);
};
