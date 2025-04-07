import React from 'react';
import { useState, useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';
// import '../Styles/ExpenseForm.css'


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
    <div className="bg-purple-800 text-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
          className="p-2 rounded bg-white text-black"
        />
        {errors.title && <span className="text-red-400">{errors.title}</span>}

        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
          className="p-2 rounded bg-white text-black"
        />
        {errors.amount && <span className="text-red-400">{errors.amount}</span>}

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-2 rounded bg-white text-black"
        />
        {errors.date && <span className="text-red-400">{errors.date}</span>}

        <textarea
          name="desc"
          placeholder="Expense Description (optional)"
          value={formData.desc}
          onChange={handleChange}
          className="p-2 rounded bg-white text-black"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 rounded bg-white text-black"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Utilities">Utilities</option>
          <option value="Clothing">Clothing</option>
          <option value="Debt">Debt</option>
          <option value="Others">Others</option>
        </select>
        {errors.category && <span className="text-red-400">{errors.category}</span>}

        <div className="flex gap-4 mt-4">
          <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded">Save</button>
          <button type="button" onClick={closeForm} className="bg-yellow-400 text-black px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm