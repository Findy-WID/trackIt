import React, { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../Styles/RecentExpenses.css";

const RecentExpenses = () => {
  const { expenses } = useContext(ExpenseContext);

  // Sort expenses by date in descending order
  const recentExpenses = expenses.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="bg-purple-800 text-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-left">Recent Expenses</h2>
        <span className="text-sm text-center block">
          Your latest transactions
        </span>
      </div>
      {recentExpenses.length === 0 ? (
        <p>No expenses recorded yet</p>
      ) : (
        <ul className="recentExpensesList">
          {recentExpenses.slice(0, 5).map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between py-2 border-b border-gray-300"
            >
              <div className="expenseTitle flex flex-col">
                <p>{expense.title}</p>
                <span>{expense.category}</span>
              </div>
              <div className="expenseAmount text-right font-semibold text-yellow-400">
                ${expense.amount}
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/expenses">
        <div className="viewMoreBtn flex justify-between items-center bg-yellow-400 text-black py-2 px-4 rounded-lg cursor-pointer mt-4">
          <button className="font-bold text-lg">View More Expenses</button>
          <IoArrowForwardCircleOutline className="text-xl ml-2 animate-slide" />
        </div>
      </Link>
    </div>
  );
};

export default RecentExpenses;
