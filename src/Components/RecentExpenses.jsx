import React, { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "../Styles/RecentExpenses.css";
import { Link } from "react-router-dom";

const RecentExpenses = () => {
  // Getting expenses from context
  const { expenses } = useContext(ExpenseContext);

  // Sort expenses by date in descending order
  const recentExpenses = expenses.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="recentExpensesCard">
      <h2>Recent Expenses</h2>
      <span>Your latest transactions</span>
      {recentExpenses.length === 0 ? (
        <p>No expenses recorded yet</p>
      ) : (
        <ul className="recentExpensesList">
          {recentExpenses.slice(0, 5).map((expense) => (
            <li key={expense.id} className="expenseItem">
              <div className="expenseTitle">
                <p>{expense.name}</p>
                <span>{expense.category}</span>
              </div>
              <div className="expenseAmount">
                <p>${expense.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/expenses">
        <div className="viewMoreBtn">
          <button>View More Expenses</button>
          <IoArrowForwardCircleOutline className="arrow-icon" />
        </div>
      </Link>
    </div>
  );
};

export default RecentExpenses;
