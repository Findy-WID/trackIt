import { useState } from "react";
import { ExpenseForm } from "../Components/ExpenseForm";
import { ExpenseList } from "../Components/ExpenseList";
import { ExpensePieChart } from "../Components/ExpensePieChart";
import '../Styles/App.css'



export const Home = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <ExpenseButton />
    </>
  )
}

export const ExpenseButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      {isFormOpen && <ExpenseForm closeForm={() => setIsFormOpen(false)}/>}
      <button  onClick={() => setIsFormOpen(true)} className="btn">Add Expense</button>
    </div>
  )
}