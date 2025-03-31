import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
// import ExpenseForm from "./ExpenseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user.name || "Guest"
  )}&background=random`;

  return (
    <div>
      <div className="profileSection">
        <img src={avatarUrl} alt="profile avatar" />
        <span>{user.name || "Guest"}</span>
      </div>

      <nav className="sideNavSection">
        <Link to="/" className="navItem">
          Home
        </Link>
        <Link to="/" className="navItem">
          Analysis
        </Link>
        <Link to="/" className="navItem">
          Daily Expenses
        </Link>
        <Link to="/" className="navItem">
          Saving Goals
        </Link>
      </nav>

      <button onClick={() => setShowModal(true)}>Add Expense</button>

      {showModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            {/* <ExpenseForm /> */}
            <button onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
