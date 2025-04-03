import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/App.css";
import "../Styles/sidebar/sidebar.css";
import { ExpenseForm } from "./ExpenseForm";

export const Sidebar = () => {
  const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user.name || "Guest"
  )}&background=random`;

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modalOverlay")) {
      setShowModal(false);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggleBtn" onClick={toggleSidebar}>
        {isOpen ? "←" : "→"}
      </button>
      <div className="sidebarContent">
        <div className="profileSection">
          <div className="profileAvatar">
            <img src={avatarUrl} alt="profile avatar" className="profileIcon" />
          </div>
          <span className="profileName">Hi, {user?.name || "Guest"}</span>
        </div>

        <nav className="sideNavSection">
          <Link to="/" className="navItem">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </Link>
          <Link to="/expenses" className="navItem">
            <i className="fas fa-money-bill"></i>
            <span>Expenses</span>
          </Link>
          <Link to="/analysis" className="navItem">
            <i className="fas fa-chart-pie"></i>
            <span>Analytics</span>
          </Link>
          <Link to="/expense-table" className="navItem">
            <i className="fas fa-table"></i>
            <span>Expense Table</span>
          </Link>
          <Link to="/goals" className="navItem">
            <i className="fas fa-goals"></i>
            <span>Financial Goals</span>
          </Link>
        </nav>

        <div className={`expenseBtnContainer ${isOpen ? "visible" : "hidden"}`}>
          <button onClick={() => setShowModal(true)} className="addExpenseBtn">
            Add Expense
          </button>
          <button onClick={handleLogout} className="logoutBtn">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>

        {showModal && (
          <div className="modalOverlay" onClick={handleOverlayClick}>
            <div className="modalContent">
              <button
                onClick={() => setShowModal(false)}
                className="modalCloseBtn"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <ExpenseForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
