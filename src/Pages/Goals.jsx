import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoalFormModal from "../Components/GoalFormModal";
import ContributionModal from "../Components/ContributionModal";
import GoalTable from "../Components/GoalTable";
import GoalProgress from "../Components/GoalProgress";
import { useGoalsContext } from "../Context/GoalsContext";

export const Goals = () => {
  const { createGoal, goals, addContribution, deleteGoal, toggleComplete } =
    useGoalsContext();

  const [selectedGoalId, setSelectedGoalId] = useState(null);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showContributionModal, setShowContributionModal] = useState(false);

  const addGoal = (goal) => {
    const newGoal = {
      ...goal,
      currentAmt: Number(goal.currentAmt) || 0,
      goalAmt: Number(goal.goalAmt) || 0,
    };
    createGoal(newGoal);
  };

  const selectedGoal = goals.find((goal) => goal.id === selectedGoalId);

  const handleDeleteGoal = (goalId) => {
    toast.warn(
      <div>
        <p>Are you sure you want to delete this goal?</p>
        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => {
              deleteGoal(goalId);
              toast.dismiss();
            }}
            style={{ padding: '5px 10px', background: '#ff4444', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Yes, Delete
          </button>
          <button 
            onClick={() => toast.dismiss()}
            style={{ padding: '5px 10px', background: '#ccc', color: 'black', border: 'none', borderRadius: '4px' }}
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        theme: "light",
      }
    );
  };

  return (
    <div className="goalPage">
      <ToastContainer />
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

      <GoalTable
        goals={goals}
        onDelete={handleDeleteGoal}
        onSelectGoal={(id) => setSelectedGoalId(id)}
        onToggleComplete={toggleComplete}
      />
      {selectedGoal && <GoalProgress goal={selectedGoal} />}
    </div>
  );
};

// <ToastContainer
// position="top-center"
// autoClose={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable={false}
// theme="light"
// transition={Zoom}
// />

// toast.warn('🦄 Wow so easy!', {
//   position: "top-center",
//   autoClose: false,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: false,
//   progress: ,
//   theme: "light",
//   transition: Zoom,
//   });

// <ToastContainer
// position="top-center"
// autoClose={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable={false}
// theme="light"
// transition={Zoom}
// />

// toast.warn('🦄 Wow so easy!', {
//   position: "top-center",
//   autoClose: false,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: false,
//   progress: ,
//   theme: "light",
//   transition: Zoom,
//   });
