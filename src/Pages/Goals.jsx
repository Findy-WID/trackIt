import React, { useEffect, useState } from "react";
import GoalFormModal from "../Components/GoalFormModal";
import ContributionModal from "../Components/ContributionModal";
import GoalTable from "../Components/GoalTable";
import GoalProgress from "../Components/GoalProgress";

export const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState(null);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showContributionModal, setShowContributionModal] = useState(false);

  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(savedGoals);
  }, []);

  useEffect(() => {
    if (goals.length > 0) {
      localStorage.setItem("goals", JSON.stringify(goals));
    }
  }, [goals]);

  const addGoal = (goal) => {
    const newGoal = { ...goal, id: Date.now() };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const addContribution = (goalId, contributionAmt) => {
    const updatedGoals = goals.map((goal) => {
      if (goal.id === goalId) {
        goal.currentAmt += contributionAmt;
      }
      return goal;
    });
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
      <div className="goalHeader">
        <div>
          <h1>Financial Goals</h1>
          <p>Set and track your financial goals</p>
        </div>
        <div className="goalBtns">
          <button
            className="goalAddBtn"
            onClick={() => setShowContributionModal(true)}
          >
            + Add Contribution
          </button>
          <button className="goalAddBtn" onClick={() => setShowGoalModal(true)}>
            + Create Goal
          </button>
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
          goalId={selectedGoalId}
        />
      )}

      <GoalTable goals={goals} onDelete={deleteGoal} />
      {selectedGoal && <GoalProgress goal={selectedGoal} />}
    </div>
  );
};
