import React from "react";

const GoalTable = ({ goals, onDelete }) => {
  return (
    <div>
      <div className="goalTable">
        <div>
          <h2>Your Goals</h2>
          <p className="goalSubtext">Track all your financial goals</p>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Goal</th>
                <th>Category</th>
                <th>Target Date</th>
                <th>Progress</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((goal) => {
                const progress = ((goal.currentAmt || 0) / goal.goalAmt) * 100;
                return (
                  <tr key={goal.id}>
                    <td>{goal.goalName}</td>
                    <td>{goal.category}</td>
                    <td>{goal.targetDate}</td>
                    <td>{progress.toFixed(0)}%</td>
                    <td>
                      #{goal.currentAmt || 0} / #{goal.goalAmt}
                    </td>
                    <td>
                      <button onClick={() => onDelete(goal.id)}>🗑</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoalTable;
