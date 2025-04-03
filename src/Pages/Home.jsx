import { useState } from "react";
import { ExpenseForm } from "../Components/ExpenseForm";
import RecentExpenses from "../Components/RecentExpenses";
import TotalExpense from "../Components/TotalExpense"
import "../Styles/App.css";
// import "../Styles/Home.css"

export const Home = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <div className="home">
        <TotalExpense />
        <RecentExpenses />
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
