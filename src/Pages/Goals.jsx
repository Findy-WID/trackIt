import React, { useState } from "react";
import GoalFormModal from "../Components/GoalFormModal";
import ContributionModal from "../Components/ContributionModal";
import GoalTable from "../Components/GoalTable";
import GoalProgress from "../Components/GoalProgress";

export const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState(null);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showContributionModal, setShowContributionModal] = useState(false);

  React.useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(savedGoals);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = (goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  const addContribution = (goalId, amount) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === goalId
        ? {
            ...goal,
            currentAmt: Number(goal.currentAmt || 0) + Number(amount),
          }
        : goal
    );
    setGoals(updatedGoals);
    setSelectedGoalId(goalId);
  };

  const deleteGoal = (goalId) => {
    const updatedGoals = goals.filter((goal) => goal.id !== goalId);
    setGoals(updatedGoals);
  };

  const selectedGoal = goals.find((goal) => goal.id === selectedGoalId);

  return (
    <div className="goalPage">
      <div>
        <div>
          <h1>Financial Goals</h1>
          <p>Set and track your financial goals</p>
        </div>
        <div>
          <button onClick={() => setShowContributionModal(true)}>
            + Add Contribution
          </button>
          <button onClick={() => setShowGoalModal(true)}>+ Create Goal</button>
        </div>
      </div>

      {showGoalModal && (
        <GoalFormModal
          onClose={() => setShowGoalModal(false)}
          onSave={addGoal}
        />
      )}

      {showContributionModal && (
        <ContributionModal
          onClose={() => setShowContributionModal(false)}
          goals={goals}
          onAdd={addContribution}
        />
      )}

      <GoalTable goals={goals} onDelete={deleteGoal} />
      {selectedGoal && <GoalProgress goal={selectedGoal} />}
    </div>
  );
};
