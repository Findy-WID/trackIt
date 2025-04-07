import React from "react";
import { GoGoal } from "react-icons/go";
import { useGoalsContext } from "../Context/GoalsContext";

const ActiveGoals = () => {
  const { goals } = useGoalsContext();

  const activeGoals = goals?.filter((goal) => !goal.completed) || [];
  const completedGoals = goals?.filter((goal) => goal.completed) || [];

  return (
    <div className="flex justify-center">
      <div className="bg-purple-800 text-white rounded-xl p-6 flex justify-between items-center w-1/2 h-24">
        <div>
          <p className="text-lg">Active Goals</p>
          <p className="text-3xl font-semibold text-yellow-400">{activeGoals.length}</p>
          <p>{completedGoals.length} completed</p>
        </div>
        <div>
          <GoGoal className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ActiveGoals;
