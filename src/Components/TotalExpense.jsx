import React, { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import { GrMoney } from "react-icons/gr";

const TotalExpenses = () => {
  const { expenses } = useContext(ExpenseContext);

  // Calculate the total expenses, ensuring expense.amount is valid
  const total = expenses.reduce((acc, expense) => {
    const amount =
      typeof expense.amount === "number" && !isNaN(expense.amount)
        ? expense.amount
        : 0;
    return acc + amount;
  }, 0);

  // Ensure total is a valid number before formatting
  const totalNumber = isNaN(total) ? 0 : total;

  return (
    <div className="flex justify-center">
      <div className="bg-purple-800 text-white rounded-xl p-6 flex justify-between items-center w-1/2 h-24">
        <div>
          <p className="text-lg">Total Expenses</p>
          <p className="text-3xl font-semibold text-yellow-400">
            ${totalNumber ? totalNumber.toFixed(2) : "0.00"}
          </p>
        </div>
        <div>
          <GrMoney className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default TotalExpenses;
