import React from 'react';
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseOverview from "../Components/ExpenseOverview";
import ExpenseList from '../Components/ExpenseList';
// import "../Styles/Expenses.css";

const Expenses = () => {
    return (
      <>
        <div>
          <h2>Expenses</h2>
          <span>Track and manage your expenses</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ExpenseForm />
          <ExpenseOverview />
        </div>
        <div>
          <ExpenseList />
        </div>
      </>
    
);
};

export default Expenses;

