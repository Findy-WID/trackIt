import React, { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import "../Styles/Table.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaEdit } from "react-icons/fa";

const ExpenseTablePage = () => {
  const { expenses, deleteExpense, updateExpense } = useContext(ExpenseContext);

  const [selectedDate, setSelectedDate] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedExpense, setEditedExpense] = useState({
    id: "",
    title: "",
    amount: "",
    category: "",
    desc: ""
  });

  // Filter expenses by selected date
  const filteredExpenses = selectedDate
    ? expenses.filter((expense) => expense.date === selectedDate)
    : expenses;

  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const handleShowAllExpenses = () => {
    setSelectedDate("");
    toast.info("Showing all expenses", {
      position: "top-right",
      autoClose: 2000,
    });
  };

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
              toast.success(`"${expenseToDelete.title}" deleted successfully!`, {
                position: "top-right",
                autoClose: 3000,
              });
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

  const handleSaveEdit = () => {
    // Ensure edited data values are converted properly
    const updatedExpense = {
      ...editedExpense,
      amount: parseFloat(editedExpense.amount), // Ensure amount is a number
    };

    if (isNaN(updatedExpense.amount)) {
      toast.error("Please provide a valid amount");
      return;
    }

    // Use the updateExpense function to update the list
    updateExpense(updatedExpense);

    // Reset editedExpense after update
    setEditedExpense({ id: "", title: "", amount: "", category: "", desc: "" });
    setShowEditModal(false);

    toast.success('Expense updated successfully!');
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
<<<<<<< HEAD
                  <td>
                    {editingId === expense.id ? (
                      <input
                        name="title"
                        value={editForm.title}
                        onChange={handleInputChange}
                      />
                    ) : (
                      expense.title
                    )}
                  </td>
                  <td>
                    {editingId === expense.id ? (
                      <input
                        name="amount"
                        type="number"
                        value={editForm.amount}
                        onChange={handleInputChange}
                      />
                    ) : (
                      `$${Number(expense.amount).toFixed(2)}`
                    )}
                  </td>
                  <td>
                    {editingId === expense.id ? (
                      <input
                        name="date"
                        type="date"
                        value={editForm.date}
                        onChange={handleInputChange}
                      />
                    ) : (
                      expense.date
                    )}
                  </td>
                  <td>
                    {editingId === expense.id ? (
                      <input
                        name="category"
                        value={editForm.category}
                        onChange={handleInputChange}
                      />
                    ) : (
                      expense.category
                    )}
                  </td>
                  <td>
                    {editingId === expense.id ? (
                      <input
                        name="desc"
                        value={editForm.desc}
                        onChange={handleInputChange}
                      />
                    ) : (
                      expense.desc || "-"
                    )}
                  </td>
                  <td>
                    {editingId === expense.id ? (
                      <button
                        className="save-btn"
                        onClick={() => handleSave(expense.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(expense)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteExpense(expense.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
=======
                  <td>{expense.title}</td>
                  <td>N{Number(expense.amount).toFixed(2)}</td>
                  <td>{expense.date}</td>
                  <td>{expense.category}</td>
                  <td>{expense.desc || "-"}</td>
                  <td className="flex items-centre content-centre">
                    <button
                      style={{ marginRight: "10px", background: "transparent", border: "none" }}
                      onClick={() => {
                        setEditedExpense(expense);
                        setShowEditModal(true);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteExpense(expense.id)}
                    >
                      <FaTrash />
                    </button>
>>>>>>> 46b204fd420551983756ab66afd6c7f9f6e78057
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedDate && (
        <div className="total-expenses">
          <p>
            Total for {selectedDate}: ${totalExpenses.toFixed(2)}
          </p>
          <button onClick={handleShowAllExpenses}>Show All Expenses</button>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '400px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }}>
              <h3>Edit Expense</h3>
              <label>Title:</label>
              <input
                type="text"
                value={editedExpense.title}
                onChange={(e) => setEditedExpense({ ...editedExpense, title: e.target.value })}
                required
              />

              <label>Amount:</label>
              <input
                type="number"
                value={editedExpense.amount}
                onChange={(e) => setEditedExpense({ ...editedExpense, amount: e.target.value })}
                required
              />

              <label>Category:</label>
              <input
                type="text"
                value={editedExpense.category}
                onChange={(e) => setEditedExpense({ ...editedExpense, category: e.target.value })}
                required
              />

              <label>Description:</label>
              <textarea
                value={editedExpense.desc}
                onChange={(e) => setEditedExpense({ ...editedExpense, desc: e.target.value })}
              />

              <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between" }}>
                <button
                  type="submit"
                  style={{ padding: '8px 16px', background: '#552C88', color: '#fff', border: 'none', borderRadius: '4px' }}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  style={{ padding: '8px 16px', background: '#aaa', color: '#fff', border: 'none', borderRadius: '4px' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ExpenseTablePage;
