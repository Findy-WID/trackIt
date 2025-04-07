import React from 'react';
import { UserProvider } from "../Context/UserContext";
import { GoalsProvider } from "../Context/GoalsContext";
import { ExpenseProvider } from "../Context/ExpenseContext";

const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <GoalsProvider>
        <ExpenseProvider>
          {children}
        </ExpenseProvider>
      </GoalsProvider>
    </UserProvider>
  );
};

export default AppProviders;
