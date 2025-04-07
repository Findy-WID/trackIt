import React from "react";
import { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import "../Styles/App.css";

export const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <div key={index} className="expense-card">
            {/* Clickable Title with Arrow */}
            <h3 onClick={() => toggleExpand(index)} className="expense-title">
              <span className="arrow">
                {expandedIndex === index ? "▼" : "▶"}
              </span>{" "}
              {expense.title}
            </h3>

            {/* Show full details if expanded */}
            {expandedIndex === index && (
              <div className="expense-details">
                <p>
                  <strong>Amount:</strong> {expense.amount}
                </p>
                <p>
                  <strong>Date:</strong> {expense.date}
                </p>
                <p>
                  <strong>Category:</strong> {expense.category}
                </p>
                <p>
                  <strong>Description:</strong> {expense.desc}
                </p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};
export default ExpenseList;
