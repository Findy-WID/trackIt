import { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';
import '../Styles/App.css'

export const ExpenseList = () => {
  const {expenses} = useContext(ExpenseContext);

  return (
    <div>
      {expenses === 0 ? (
        <p>There is not added expenses yet</p>
      ) : (
         expenses.map((expense, index) => (
          <div key={index} className='expense-card'>
            <p><strong>Amount: {expense.amount}</strong></p>
            <p><strong>Description: {expense.desc}</strong></p>
            <p><strong>Date: {expense.date}</strong></p>
            <p><strong>Category: {expense.category}</strong></p>
          </div>
         ))  
      )}
    </div> 
  )
}
