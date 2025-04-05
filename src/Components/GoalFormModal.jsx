import React, { useState } from "react";

const GoalFormModal = ({ onClose, onSave }) => {
  const [goalData, setGoalData] = useState({
    id: Date.now(),
    goalName: "",
    goalAmt: "",
    currentAmt: "",
    targetDate: "",
    category: "Select",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGoalData({ ...goalData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(goalData);
    onClose();
  };

  return (
    <div className="goalModal">
      <div className="goalModalContent">
        <div>
          <h2>Create New Goal</h2>
          <p>Set a new financial goal</p>
        </div>
        <form action="">
          <div>
            <label htmlFor="goal name">Goal Name</label>
            <input
              type="text"
              name="goalName"
              placeholder="Rent, New car, Emergency fund, etc."
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="target amount">Target Amount</label>
            <input
              type="number"
              name="goalAmt"
              placeholder="# 0.00"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="current amount">Current Amount (Optional)</label>
            <input
              type="number"
              name="currentAmt"
              placeholder="# 0.00"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="target date">Target Date</label>
            <input
              type="date"
              name="targetDate"
              placeholder="Pick a date"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="goal category">Goal Category</label>
            <select name="category" id="">
              <option>Select</option>
              <option>Savings</option>
              <option>Investment</option>
              <option>Education</option>
              <option>Debt Repayment</option>
              <option>Rent</option>
              <option>Vacation</option>
              <option>Vehicle</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <button type="submit">+ Create Goal</button>
          </div>
        </form>
        <button onClick={onClose} className="closeBtn">
          Close
        </button>
      </div>
    </div>
  );
};

export default GoalFormModal;
