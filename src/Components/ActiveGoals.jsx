import React from "react";
import { GoGoal } from "react-icons/go";

const ActiveGoals = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-purple-800 text-white rounded-xl p-6 flex justify-between items-center w-1/2 h-24">
        <div>
          <p className="text-lg">Active Goals</p>
          <p className="text-3xl font-semibold text-yellow-400">0</p>
          <p>0 completed</p>
        </div>
        <div>
          <GoGoal className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ActiveGoals;
