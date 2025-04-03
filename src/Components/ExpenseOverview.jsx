import { useContext, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

const ExpenseOverview = () => {
    const { expenses } = useContext(ExpenseContext);

    // State to track selected category
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get unique categories
    const categories = ["All", ...new Set(expenses.map(expense => expense.category))];

    // Filter expenses based on the selected category
    const filteredExpenses = selectedCategory === "All"
        ? expenses
        : expenses.filter(expense => expense.category === selectedCategory);

    // Calculate total amount for the selected category (Ensure it's a number)
    const totalAmount = filteredExpenses.reduce((sum, expense) => sum + Number(expense.amount), 0);

    return (
        <div className="expense-container">
            <h2>Expense Overview</h2>

            {/* CATEGORY TOGGLE BUTTONS */}
            <div className="category-buttons">
                {categories.map(category => (
                    <button 
                        key={category} 
                        className={category === selectedCategory ? "active" : ""}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* TOTAL DISPLAY */}
            <h3>Total: ${totalAmount.toFixed(2)}</h3>

            {/* EXPENSE LIST */}
            <ul>
                {filteredExpenses.map((expense) => (
                    <li key={expense.id}> {/* 🔥 Unique key added */}
                        {expense.name} - ${expense.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseOverview;
