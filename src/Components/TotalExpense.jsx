import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";
import '../Styles/TotalExpense.css'

const TotalExpenses = () => {
    const { expenses } = useContext(ExpenseContext);

    console.log("Expenses:", expenses); // Log expenses to check the data

    // Calculate the total expenses, ensuring expense.amount is valid
    const total = expenses.reduce((acc, expense) => {
        // Log individual expense to debug
        console.log("Expense:", expense);

        // Check if expense.amount is valid
        const amount = typeof expense.amount === "number" && !isNaN(expense.amount) ? expense.amount : 0;
        return acc + amount;
    }, 0);

    // Ensure total is a valid number before formatting
    const totalNumber = isNaN(total) ? 0 : total;

    return (
        <div className="totalExpensesCard">
            <h3>Total Expenses</h3>
            <p>${totalNumber ? totalNumber.toFixed(2) : "0.00"}</p> {/* Only apply .toFixed if valid */}
        </div>
    );
};

export default TotalExpenses;