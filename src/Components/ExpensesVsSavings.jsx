import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ExpenseVsSavingsChart = () => {
  const chartData = [
    { week: "Week 1", expenses: 5000, savings: 2000 },
    { week: "Week 2", expenses: 4000, savings: 3000 },
    { week: "Week 3", expenses: 6000, savings: 3500 },
    { week: "Week 4", expenses: 4500, savings: 4000 },
  ];

  return (
    <div className="w-full h-80 bg-white rounded-xl p-4 shadow w-full h-[300px] md:h-[400px]">
      <h3 className="text-lg font-semibold mb-4 text-center">Expenses vs Savings</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="expenses" stroke="#FF5733" />
          <Line type="monotone" dataKey="savings" stroke="#28B463" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseVsSavingsChart;
