import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
// import ExpenseForm from "./ExpenseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/App.css";
import "../Styles/sidebar/sidebar.css";

export const Sidebar = ({ setActiveSection }) => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user.name || "Guest"
  )}&background=random`;

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modalOverlay")) {
      setShowModal(false);
    }
  };

  return (
    <div className="sidebar">
      <div className="profileSection">
        <div className="profileAvatar">
          <img src={avatarUrl} alt="profile avatar" className="profileIcon" />
        </div>
        <span className="profileName">Hi, {user?.name || "Guest"}</span>
      </div>

      <nav className="sideNavSection">
        <button onClick={() => setActiveSection("home")} className="navItem">
          Home
        </button>
        <button
          onClick={() => setActiveSection("analysis")}
          className="navItem"
        >
          Analysis
        </button>
        <button onClick={() => setActiveSection("daily")} className="navItem">
          Daily Expenses
        </button>
        <button onClick={() => setActiveSection("goals")} className="navItem">
          Saving Goals
        </button>
      </nav>

      <div className="expenseBtnContainer">
        <button onClick={() => setShowModal(true)} className="addExpenseBtn">
          Add Expense
        </button>
      </div>

      {showModal && (
        <div className="modalOverlay" onClick={handleOverlayClick}>
          <div className="modalContent">
            {/* <ExpenseForm /> */}
            <button
              onClick={() => setShowModal(false)}
              className="modalCloseBtn"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
