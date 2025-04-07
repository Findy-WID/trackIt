import React from 'react';
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseOverview from "../Components/ExpenseOverview";
// import "../Styles/Expenses.css";

const Expenses = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  <ExpenseForm />
  <ExpenseOverview />
</div>
);
};

export default Expenses;

