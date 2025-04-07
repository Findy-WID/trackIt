import React, { createContext, useContext, useState, useEffect } from 'react';

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  const createGoal = (newGoal) => {
    const goalWithId = { ...newGoal, id: Date.now(), completed: false };
    const updatedGoals = [...goals, goalWithId];
    setGoals(updatedGoals);
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
  };

  const toggleComplete = (id) => {
    const updatedGoals = goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
  };

  return (
    <GoalsContext.Provider value={{ goals, createGoal, toggleComplete }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoalsContext = () => {
  return useContext(GoalsContext);
};
