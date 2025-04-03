import { useState, useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';
import '../Styles/ExpenseForm.css'


export const ExpenseForm = ({ closeForm }) => {
  const { addExpense } = useContext(ExpenseContext);
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    desc: "",
    category: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation for title, amount, date, and category
    if (!formData.title) newErrors.title = "Title is required!";
    if (!formData.amount) newErrors.amount = "Amount is required!";
    if (!formData.date) newErrors.date = "Date is required!";
    if (!formData.category) newErrors.category = "Category is required!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      addExpense(formData);
      closeForm();
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          placeholder="Enter Title" 
          value={formData.title} 
          onChange={handleChange}
          required
        />
        {errors.title && <span className="error">{errors.title}</span>}

        <input 
          type="number" 
          name="amount" 
          placeholder="Enter amount" 
          value={formData.amount} 
          onChange={handleChange}
          required
        />
        {errors.amount && <span className="error">{errors.amount}</span>}

        <input 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange}
          required
        />
        {errors.date && <span className="error">{errors.date}</span>}

        <textarea 
          name="desc" 
          placeholder="Expense Description (optional)" 
          value={formData.desc} 
          onChange={handleChange}
        />
        {errors.desc && <span className="error">{errors.desc}</span>}

        <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Utilities">Utilities</option>
          <option value="Clothing">Clothing</option>
          <option value="Debt">Debt</option>
          <option value="Others">Others</option>
        </select>
        {errors.category && <span className="error">{errors.category}</span>}

        <button type="submit" className='btn' style={{margin: "20px"}}>Save</button>
        <button type="button" onClick={closeForm} className="btn" style={{margin: "20px"}}>Cancel</button>
      </form>
    </div>
  );
};
export default ExpenseForm