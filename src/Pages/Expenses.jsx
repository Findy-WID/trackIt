import ExpenseForm from "../Components/ExpenseForm";
import ExpenseOverview from "../Components/ExpenseOverview";
import "../Styles/Expenses.css";

const Expenses = () => {
    return (
        <div>
            <div className="ExpensesHeaders">
                <h2>Expenses</h2>
                <span>Track and Manage your Expenses.</span>
            </div>
            <div className="expenses-container">
                <div className="expense-form">
                    <ExpenseForm />
                </div>
                <div className="expense-overview">
                    <ExpenseOverview />
                </div>
            </div>
        </div>
    );
};

export default Expenses;

