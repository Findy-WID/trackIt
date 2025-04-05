import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Analysis from "../Pages/Analysis";
// import "../Styles/Sidebar.css";
import { UserContext } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/sidebar/sidebar.css";
import { ExpenseForm } from "./ExpenseForm";
import AddExpenseButton from "./AddExpenseButton";
import LogoutButton from "./LogoutButton";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpenseDropdown, setIsExpenseDropdown] = useState(false);
  const { user, updateUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user?.firstName || "Guest"
  )}&background=random`;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modalOverlay")) {
      setShowModal(false);
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    updateUser({ firstName: "" });
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggleBtn" onClick={toggleSidebar}>
        {isOpen ? "←" : "→"}
      </button>

      <div className="sidebarContent">
        {/* <div className="logo">
          <h2>TrackIt</h2>
        </div> */}

        <div className="profileSection">
          <div className="profileAvatar">
            <img src={avatarUrl} alt="profile avatar" className="profileIcon" />
          </div>
          <span className="profileName">Hi, {user?.firstName || "Guest"}</span>
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
            {" "}
            {/* Changed from /Analysis to /analysis */}
            <i className="fas fa-chart-pie"></i>
            <span>Analytics</span>
          </Link>

          <div className="nav-item">
            <div
              className="navItem"
              onClick={() => setIsExpenseDropdown(!isExpenseDropdown)}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-table"></i>
              <span style={{ marginRight: "10px" }}>Expense Table</span>
              <i
                className={`fas fa-chevron-${
                  isExpenseDropdown ? "down" : "right"
                }`}
                style={{ fontSize: "12px" }}
              />
            </div>

            {isExpenseDropdown && (
              <div className="dropdown-menu">
                <Link to="/expense-table/all" className="dropdown-item">
                  <i className="fas fa-list"></i>
                  <span>All Expenses</span>
                </Link>
                <Link to="/expense-table/daily" className="dropdown-item">
                  <i className="fas fa-calendar-day"></i>
                  <span>Daily Expenses</span>
                </Link>

                <Link to="/expense-table/monthly" className="dropdown-item">
                  <i className="fas fa-calendar-day"></i>
                  <span>Monthly Expenses</span>
                </Link>
              </div>
            )}
          </div>

          <div
            className={`expenseBtnContainer ${isOpen ? "visible" : "hidden"}`}
          >
            <AddExpenseButton onClick={() => setShowModal(true)} />
            <LogoutButton onClick={handleLogout} />
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
        </nav>
      </div>
    </div>
  );
};
