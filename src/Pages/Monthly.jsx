import React, { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import "../Styles/Table.css";

const Monthly = () => {
  const { expenses } = useContext(ExpenseContext);
  const [selectedMonth, setSelectedMonth] = useState("");

  // Filter expenses for selected month
  const monthlyExpenses = selectedMonth
    ? expenses.filter((expense) => {
        const expenseDate = new Date(expense.date);
        const expenseMonth = `${expenseDate.getFullYear()}-${String(
          expenseDate.getMonth() + 1
        ).padStart(2, "0")}`;
        return expenseMonth === selectedMonth;
      })
    : [];

  // Calculate monthly total
  const monthlyTotal = monthlyExpenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  // Group expenses by category for the selected month
  const categoryTotals = monthlyExpenses.reduce((acc, expense) => {
    const category = expense.category || "Uncategorized";
    acc[category] = (acc[category] || 0) + Number(expense.amount);
    return acc;
  }, {});

  return (
    <div className="monthly-expense-page">
      <div className="monthly-header">
        <h2>Monthly Expense Summary</h2>
        <div className="month-selector">
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="month-filter"
          />
        </div>
        {selectedMonth && (
          <div className="monthly-summary">
            <div className="monthly-total">
              Total for{" "}
              {new Date(selectedMonth + "-01").toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
              })}
              :<span className="amount">N{monthlyTotal.toFixed(2)}</span>
            </div>

            <div className="category-summary">
              <h3>Category Breakdown:</h3>
              <div className="category-grid">
                {Object.entries(categoryTotals).map(([category, amount]) => (
                  <div key={category} className="category-item">
                    <span className="category-name">{category}</span>
                    <span className="category-amount">
                      N{amount.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="table-container">
        {selectedMonth ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {monthlyExpenses.length === 0 ? (
                <tr>
                  <td colSpan="5" className="no-data">
                    No expenses found for{" "}
                    {new Date(selectedMonth + "-01").toLocaleDateString(
                      undefined,
                      { year: "numeric", month: "long" }
                    )}
                  </td>
                </tr>
              ) : (
                monthlyExpenses
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((expense, index) => (
                    <tr key={index}>
                      <td>{new Date(expense.date).toLocaleDateString()}</td>
                      <td>{expense.title}</td>
                      <td>N{Number(expense.amount).toFixed(2)}</td>
                      <td>{expense.category || "Uncategorized"}</td>
                      <td>{expense.desc || "-"}</td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        ) : (
          <div className="select-month-message">
            Please select a month to view expenses
          </div>
        )}
      </div>
    </div>
  );
};

export default Monthly;
