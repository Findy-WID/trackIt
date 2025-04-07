import React, { useContext } from 'react';
import { createContext, useState } from 'react';

export const GoalsContext = useContext(createContext);

export const Goalsprovider = ({children}) => {
    [goals, setGoals] = useState(0);

    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse
}