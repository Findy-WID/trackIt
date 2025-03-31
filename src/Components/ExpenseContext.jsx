import { Children, createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({Children}) => {
    const [expense, setExpense] = useState([]);

    const Addexpense =(newExpense) => {
        setExpense((prev) =>{
            const updateExpense = [...prev, newExpense];
            localStorage.setItem("expenses", JSON.stringify(Addexpense));
            return Addexpense;
        })

        return (
            <ExpenseContext.Provider value={{ expense, addExpense }}>
                {Children}
            </ExpenseContext.Provider>
        )
    }
}