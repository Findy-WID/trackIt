import React, { useState } from "react";

const ContributionModal = ({ onClose, onAdd, goals }) => {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (goalId && amount) {
      onAdd(goalId, Number(amount));
      onClose();
    }
  };
  return (
    <div className="contributionModal">
      <div className="contributionModalContent">
        <div>
          <h2>Add Contribution</h2>
          <p>Update progress on your goals</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="select goals">Select Goal</label>
            <select
              onChange={(event) => setGoalId(event.target.value)}
              required
            >
              <option value="">Select Goal</option>
              {goals.map((goal) => (
                <option key={goal.id} value={goal.id}>
                  {goal.goalName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Contribution Amount</label>
            <input
              type="number"
              placeholder="Contribution Amount"
              onChange={(event) => setAmount(event.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Add Contribuion</button>
          </div>
        </form>
        <button onClick={onClose} className="closeBtn">
          Close
        </button>
      </div>
    </div>
  );
};

export default ContributionModal;
