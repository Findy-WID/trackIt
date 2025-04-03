import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Analysis from '../Pages/Analysis';
import '../Styles/Sidebar.css';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '←' : '→'}
      </button>
      
      <div className="sidebar-content">
        <div className="logo">
          <h2>TrackIt</h2>
        </div>

        <nav className="nav-menu">
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </Link>
          
          <Link to="/expenses" className="nav-link">
            <i className="fas fa-money-bill"></i>
            <span>Expenses</span>
          </Link>
          
          <Link to="/analysis" className="nav-link">  {/* Changed from /Analysis to /analysis */}
          <i className="fas fa-chart-pie"></i>
          <span>Analytics</span>
        </Link>
          
          <Link to="/expense-table" className="nav-link">  {/* Changed from /ExpenseTablePage to /expense-table */}
          <i className="fas fa-table"></i>

            <span>Expense Table</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};
