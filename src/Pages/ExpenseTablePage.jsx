
import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../Components/ExpenseContext';
import '../Styles/Table.css';

const ExpenseTablePage = () => {
  const { expenses } = useContext(ExpenseContext);
  const [selectedDate, setSelectedDate] = useState('');

  // Filter expenses based on selected date
  const filteredExpenses = selectedDate
    ? expenses.filter(expense => expense.date === selectedDate)
    : expenses;

  // Calculate total expenses for filtered results
  const totalExpenses = filteredExpenses.reduce((total, expense) => 
    total + Number(expense.amount), 0
  );

  // Handler to clear the date filter
  const handleShowAllExpenses = () => {
    setSelectedDate('');
  };

  return (
    <div className="expense-table-page">
      <div className="table-header">
        <h2>Expense Summary</h2>
        <div className="filter-section">
          <h1>Each Day</h1>
          <div className="filter-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="date-filter"
            />
            {selectedDate && (
              <button
                onClick={handleShowAllExpenses}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
              >
                Show All Expenses
              </button>
            )}
          </div>
          <div className="total-expenses">
            Total Expenses: N{totalExpenses.toFixed(2)}
          </div>
        </div>
      </div>

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
            {filteredExpenses.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-data">
                  {selectedDate ? 'No expenses found for selected date' : 'No expenses recorded yet'}
                </td>
              </tr>
            ) : (
              filteredExpenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.title}</td>
                  <td>N{Number(expense.amount).toFixed(2)}</td>
                  <td>{expense.date}</td>
                  <td>{expense.category}</td>
                  <td>{expense.desc || '-'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTablePage;