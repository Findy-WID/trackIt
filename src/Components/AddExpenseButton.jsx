import React from "react";
import "../Styles/sidebar/sidebar.css";

const AddExpenseButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="addExpenseBtn">
      Add Expense
    </button>
  );
};

export default AddExpenseButton;
