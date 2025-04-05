import React, { useState } from "react";
import "../Styles/Goals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modalOverlay")) {
      onClose();
    }
  };

  return (
    <div className="modalOverlay" onClick={handleOverlayClick}>
      <div className="modalContent">
        <div>
          <h2>Create New Goal</h2>
          <p>Set a new financial goal</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="goalName">Goal Name</label>
            <input
              name="goalName"
              id="goalName"
              type="text"
              placeholder="Rent, New car, Emergency fund, etc."
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="goalAmt">Target Amount</label>
            <input
              name="goalAmt"
              id="goalAmt"
              type="number"
              placeholder="# 0.00"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="currentAmt">Current Amount (Optional)</label>
            <input
              name="currentAmt"
              id="currentAmt"
              type="number"
              placeholder="# 0.00"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="targetDate">Target Date</label>
            <input
              name="targetDate"
              id="targetDate"
              type="date"
              placeholder="Pick a date"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="category">Goal Category</label>
            <select name="category" id="category">
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
        <button onClick={onClose} className="modalCloseBtn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default GoalFormModal;
