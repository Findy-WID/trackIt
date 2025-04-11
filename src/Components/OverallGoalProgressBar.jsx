import React from 'react';

const OverallGoalProgressBar = ({ goals = [] }) => {
  // Error handling: If goals is not an array, log an error
  if (!Array.isArray(goals)) {
    console.error("goals is not an array", goals); // Error handling if it's not an array
    return null; // Return nothing if there's an error
  }

  // Calculate the number of completed goals (where current >= target)
  const completedGoals = goals.filter(goal => goal.current >= goal.target).length;
  const totalGoals = goals.length;

  // Calculate goal completion rate based on completed vs. total goals
  const goalCompletionRate = totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;

  // Color logic for the progress bar:
  // - Blue for active goals
  // - Green when all goals are completed
  // - White if no progress
  let progressBarColor = 'bg-blue-500';  // Default to blue for active goals
  if (goalCompletionRate === 100) {
    progressBarColor = 'bg-green-500';  // Full green when all goals are completed
  } else if (goalCompletionRate > 0) {
    progressBarColor = 'bg-blue-500';  // Blue for active but incomplete goals
  } else {
    progressBarColor = 'bg-white';  // White if no progress
  }

  return (
    <div className="progress-bar-container mb-6">
      {/* Title and overall completion percentage */}
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-lg font-semibold">Overall Goal Progress</span>
        </div>
        <div>
          <span className="text-sm font-semibold">{`${Math.round(goalCompletionRate)}%`}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex mb-2">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${progressBarColor}`}
            style={{ width: `${goalCompletionRate}%` }} // Dynamic width based on overall progress
          ></div>
        </div>
      </div>
    </div>
  );
};

export default OverallGoalProgressBar;
