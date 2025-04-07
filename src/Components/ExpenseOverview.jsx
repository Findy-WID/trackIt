import React from "react";
import { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

const ExpenseOverview = () => {
  const { expenses } = useContext(ExpenseContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(expenses.map((exp) => exp.category))];
  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((exp) => exp.category === selectedCategory);
  const totalAmount = filteredExpenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  return (
    <div className="bg-purple-800 text-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Expense Overview</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded ${
              selectedCategory === category
                ? "bg-yellow-400 text-black font-bold"
                : "bg-white text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Total */}
      <h3 className="text-xl mb-2">Total: ${totalAmount.toFixed(2)}</h3>

      {/* Expenses List */}
      <ul className="space-y-1">
        {filteredExpenses.map((expense, idx) => (
          <li key={idx}>
            <span className="text-white">{expense.title}</span> - $
            {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseOverview;
