import React, { useState, useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import "../Styles/Table.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpenseTablePage = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);
  const [selectedDate, setSelectedDate] = useState("");

  // Filter expenses based on selected date
  const filteredExpenses = selectedDate
    ? expenses.filter((expense) => expense.date === selectedDate)
    : expenses;

  // Calculate total expenses for filtered results
  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  // Handler to clear the date filter with toast notification
  const handleShowAllExpenses = () => {
    setSelectedDate("");
    toast.info("Showing all expenses", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Delete expense handler with toast confirmation
  const handleDeleteExpense = (expenseId) => {
    const expenseToDelete = expenses.find((exp) => exp.id === expenseId);

    toast.warning(
      <div>
        <p>Delete "{expenseToDelete.title}" expense?</p>
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button
            onClick={() => {
              deleteExpense(expenseId);
              toast.dismiss();
              toast.success(
                `"${expenseToDelete.title}" deleted successfully!`,
                {
                  position: "top-right",
                  autoClose: 3000,
                }
              );
            }}
            style={{
              padding: "5px 10px",
              background: "#ff4444",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Confirm
          </button>
          <button
            onClick={() => toast.dismiss()}
            style={{
              padding: "5px 10px",
              background: "#ccc",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeButton: false,
        draggable: false,
        closeOnClick: false,
      }
    );
  };

  return (
    <div className="expense-table-page">
      <h2>Expense Summary</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-data">
                  {selectedDate
                    ? "No expenses found for selected date"
                    : "No expenses recorded yet"}
                </td>
              </tr>
            ) : (
              filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>N{Number(expense.amount).toFixed(2)}</td>
                  <td>{expense.date}</td>
                  <td>{expense.category}</td>
                  <td>{expense.desc || "-"}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteExpense(expense.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Show total expenses with a toast when filtered */}
      {selectedDate && (
        <div className="total-expenses">
          <p>
            Total for {selectedDate}: N{totalExpenses.toFixed(2)}
          </p>
          <button onClick={handleShowAllExpenses}>Show All Expenses</button>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ExpenseTablePage;
