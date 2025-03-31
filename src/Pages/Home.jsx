import { useState } from "react";
import { ExpenseForm } from "../Components/ExpenseForm";
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
  const [formisOpen, setFormisOpen] = useState(false);

  return (
    <div>
      {formisOpen && <ExpenseForm closeForm={() => setFormisOpen(false)}/>}
      <button onClick={() => setFormisOpen(true)} className="btn">Add Expense</button>
    </div>
  )
}