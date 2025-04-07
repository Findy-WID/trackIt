import { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

export const ExpenseTable = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.title}</td>
              <td>${expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 