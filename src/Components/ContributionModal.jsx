import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ContributionModal = ({ onClose, onAdd, goals }) => {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (goalId && amount) {
      await onAdd(goalId, Number(amount));
      onClose();
    }
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
          <h2>Add Contribution</h2>
          <p>Update progress on your goals</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="selectGoals">Select Goal</label>
            <select
              name="selectGoals"
              id="selectGoals"
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
            <label htmlFor="contributionAmt">Contribution Amount</label>
            <input
              name="contributionAmt"
              id="contributionAmt"
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
        <button onClick={onClose} className="modalCloseBtn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default ContributionModal;
