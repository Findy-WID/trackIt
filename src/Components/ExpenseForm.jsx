import { useContext, useState } from 'react';
import FormInput from './FormInput'
import "../Styles/App.css"
import { ExpenseContext } from './ExpenseContext';

const options = ["Food", "Transportaion", "Utilities", "Clothing", "Debt", "Others"];

export const ExpenseForm = ({closeForm}) => {
  const addExpense = useContext(ExpenseContext)
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    desc: "",
    category: ""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
    closeForm();
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" placeholder="Enter amount" value={formData.amount} onChange={handleChange} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <input type="text" name="desc" placeholder="Expense Description" value={formData.desc} onChange={handleChange} />
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Utilities">Utilities</option>
          <option value="Clothing">Clothing</option>
          <option value="Debt">Debt</option>
          <option value="Others">Others</option>
        </select>

        <button type="submit">Save</button>
        <button type="button" onClick={closeForm}>Cancel</button>
      </form>
    </div>
  )
}
