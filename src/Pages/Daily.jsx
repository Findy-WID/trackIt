import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../Components/ExpenseContext';
import '../Styles/Table.css';

const Daily = () => {
  const { expenses } = useContext(ExpenseContext);
  const [selectedDate, setSelectedDate] = useState('');

  // Filter expenses for selected date
  const dailyExpenses = selectedDate
    ? expenses.filter(expense => expense.date === selectedDate)
    : [];

  // Calculate total for selected date
  const dailyTotal = dailyExpenses.reduce((total, expense) => 
    total + Number(expense.amount), 0
  );

  return (
    <div className="daily-expense-page">
      <div className="daily-header">
        <h2>Daily Expense Tracker</h2>
        <div className="date-selector">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-filter"
          />
        </div>
        {selectedDate && (
          <div className="daily-total">
            Total for {new Date(selectedDate).toLocaleDateString()}: N{dailyTotal.toFixed(2)}
          </div>
        )}
      </div>

      <div className="table-container">
        {selectedDate ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
                <th>Time Added</th>
              </tr>
            </thead>
            <tbody>
              {dailyExpenses.length === 0 ? (
                <tr>
                  <td colSpan="5" className="no-data">
                    No expenses found for {new Date(selectedDate).toLocaleDateString()}
                  </td>
                </tr>
              ) : (
                dailyExpenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.title}</td>
                    <td>N{Number(expense.amount).toFixed(2)}</td>
                    <td>{expense.category}</td>
                    <td>{expense.desc || '-'}</td>
                    <td>{new Date(expense.date).toLocaleTimeString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        ) : (
          <div className="select-date-message">
            Please select a date to view expenses
          </div>
        )}
      </div>
    </div>
  );
};

export default Daily;
