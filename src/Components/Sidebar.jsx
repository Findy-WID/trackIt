import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Analysis from "../Pages/Analysis";
// import "../Styles/Sidebar.css";
import { UserContext } from "../Context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faBullseye,
  faChartLine,
  faTable,
  faXmark,
  faChevronDown,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { FaHome, FaMoneyCheck } from "react-icons/fa";
import "../Styles/sidebar/sidebar.css";
import { ExpenseForm } from "./ExpenseForm";
import AddExpenseButton from "./AddExpenseButton";
import LogoutButton from "./LogoutButton";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
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
    navigate("/");
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
          <Link to="/home" className="navItem">
            <FaHome className="sidebarIcon" />
            <span>Dashboard</span>
          </Link>

          <Link to="/expenses" className="navItem">
            <FaMoneyCheck className="sidebarIcon" />
            <span>Expenses</span>
          </Link>

          <Link to="/analysis" className="navItem">
            {" "}
            {/* Changed from /Analysis to /analysis */}
            <FontAwesomeIcon icon={faChartLine} className="sidebarIcon" />
            <span>Analytics</span>
          </Link>

          <div className="nav-item">
            <div
              className="navItem"
              onClick={() => setIsExpenseDropdown(!isExpenseDropdown)}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faTable} className="sidebarIcon" />
              <span style={{ marginRight: "10px" }}>Expense Table</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`sidebarIcon-${
                  isExpenseDropdown ? "down" : "right"
                }`}
                style={{ fontSize: "12px" }}
              />
            </div>

            {isExpenseDropdown && isOpen && (
              <div className="dropdown-menu">
                <Link to="/expense-table/all" className="dropdown-item">
                  <FontAwesomeIcon icon={faTable} className="sidebarIcon" />
                  <span>All Expenses</span>
                </Link>
                <Link to="/expense-table/daily" className="dropdown-item">
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    className="sidebarIcon"
                  />
                  <span>Daily Expenses</span>
                </Link>

                <Link to="/expense-table/monthly" className="dropdown-item">
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    className="sidebarIcon"
                  />
                  <span>Monthly Expenses</span>
                </Link>
              </div>
            )}
          </div>

          <Link to="/goals" className="navItem">
            <FontAwesomeIcon icon={faBullseye} className="sidebarIcon" />
            <span>Goals</span>
          </Link>

          <div
            className={`expenseBtnContainer ${isOpen ? "visible" : "hidden"}`}
          >
            <Link to="/expenses">
              <AddExpenseButton />
            </Link>
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
