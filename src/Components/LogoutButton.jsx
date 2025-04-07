import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../Styles/sidebar/sidebar.css";

const LogoutButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="logoutBtn">
      <FontAwesomeIcon icon={faSignOutAlt} /> Logout
    </button>
  );
};

export default LogoutButton;
