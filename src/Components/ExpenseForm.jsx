import { useContext, useState } from 'react';
import "../Styles/App.css"
import { ExpenseContext } from './ExpenseContext';

const options = ["Food", "Transportation", "Utilities", "Clothing", "Debt", "Others"];

export const ExpenseForm = ({closeForm}) => {
  const { addExpense } = useContext(ExpenseContext);
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    desc: "",
    category: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.date || !formData.category) {
      alert("Please fill in all required fields");
      return;
    }
    addExpense(formData);
    closeForm();
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          name="amount" 
          placeholder="Enter amount" 
          value={formData.amount} 
          onChange={handleChange}
          required 
        />
        <input 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange}
          required 
        />
        <input 
          type="text" 
          name="desc" 
          placeholder="Expense Description" 
          value={formData.desc} 
          onChange={handleChange} 
        />
        <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <button type="submit">Save</button>
        <button type="button" onClick={closeForm}>Cancel</button>
      </form>
    </div>
  );
};
