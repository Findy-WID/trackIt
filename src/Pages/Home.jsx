import React from 'react';
import { useState } from "react";
import { ExpenseForm } from "../Components/ExpenseForm";
import RecentExpenses from "../Components/RecentExpenses";
import TotalExpense from "../Components/TotalExpense"
import ActiveGoals from "../Components/ActiveGoals";
import ExpenseVsSavingsChart from '../Components/ExpensesVsSavings';
import "../Styles/App.css";

export const Home = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-lg p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <TotalExpense className="border p-4 rounded-lg shadow-md" />
    <ActiveGoals className="border p-4 rounded-lg shadow-md" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <div className="border p-4 rounded-lg shadow-md">
      <RecentExpenses />
    </div>
    <div className="bg-purple-800 text-white rounded-xl p-6 shadow-lg">
      {/* Placeholder for line chart or other data */}
      <ExpenseVsSavingsChart />
    </div>
  </div>

  <div className="mt-6 p-6">
    <div className="bg-purple-800 text-white rounded-xl p-6 shadow-lg">
      {/* Goals Progress Bar or Overview */}
      <p>Goals Progress Overview</p>
    </div>
  </div>
</div>


    </>
  );
};

export const ExpenseButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      {isFormOpen && <ExpenseForm closeForm={() => setIsFormOpen(false)} />}
      <button onClick={() => setIsFormOpen(true)} className="btn">
        Add Expense
      </button>
    </div>
  );
};
