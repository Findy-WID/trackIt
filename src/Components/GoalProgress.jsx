import React from "react";
import "../Styles/Goals.css";

const GoalProgress = ({ goal }) => {
  const progress = ((goal.currentAmt || 0) / goal.goalAmt) * 100;

  return (
    <div>
      <div className="progressContainer">
        <h3>Goal Progress</h3>
        <p>{goal.goalName}</p>
        <div className="progressBar">
          <div className="filled" style={{ width: `${progress}%` }}></div>
        </div>
        <p>
          {progress.toFixed(1)}% Complete (${goal.currentAmt} / ${goal.goalAmt})
        </p>
      </div>
    </div>
  );
};

export default GoalProgress;
