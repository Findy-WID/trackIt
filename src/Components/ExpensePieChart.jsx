import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useExpenseContext } from "./ExpenseContext"; 

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384"];

export const ExpensePieChart = () => {
  const { expenses } = useExpenseContext();

  const data = expenses.map(expense => ({
    name: expense.title,
    amount: parseFloat(expense.amount)
  }));


  return (
    <PieChart>
      <Pie 
        data={data} 
        cx="50%" 
        cy="50%" 
        outerRadius={150} 
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  )
}
