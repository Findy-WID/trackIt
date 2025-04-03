import React, { useContext, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { ExpenseContext } from './ExpenseContext';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ExpenseAnalytics = () => {
    const { expenses } = useContext(ExpenseContext);
    const [selectedDate, setSelectedDate] = useState('');

    // Process expenses data
    const getChartData = () => {
        // Filter expenses by selected date if any
        const filteredExpenses = selectedDate
            ? expenses.filter(expense => {
                const expenseDate = new Date(expense.date).toISOString().split('T')[0];
                return expenseDate === selectedDate;
              })
            : expenses;

        // Group expenses by category
        const expensesByCategory = filteredExpenses.reduce((acc, expense) => {
            const category = expense.category || 'Uncategorized';
            acc[category] = (acc[category] || 0) + parseFloat(expense.amount);
            return acc;
        }, {});

        return {
            labels: Object.keys(expensesByCategory),
            datasets: [{
                data: Object.values(expensesByCategory),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#41B883',
                    '#E46651',
                ],
                borderWidth: 1
            }]
        };
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: selectedDate 
                    ? `Expenses for ${new Date(selectedDate).toLocaleDateString()}`
                    : 'All Expenses by Category',
                font: {
                    size: 16
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const value = context.raw;
                        return `N${value.toFixed(2)}`;
                    }
                }
            }
        }
    };

    return (
        <div className="expense-analytics">
            <div className="date-filter" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />
                {selectedDate && (
                    <button
                        onClick={() => setSelectedDate('')}
                        style={{
                            marginLeft: '10px',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: '#FF6384',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    >
                        Clear Filter
                    </button>
                )}
            </div>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {expenses.length > 0 ? (
                    <Pie data={getChartData()} options={options} />
                ) : (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        No expenses found. Start adding expenses to see your spending analysis.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpenseAnalytics; 