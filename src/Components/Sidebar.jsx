import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Analysis from '../Pages/Analysis';
import '../Styles/Sidebar.css';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpenseDropdown, setIsExpenseDropdown] = useState(false);

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
          <Link to="/home" className="nav-link">
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
          
          <div className="nav-item">
            <div 
              className="nav-link"
              onClick={() => setIsExpenseDropdown(!isExpenseDropdown)}
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-table"></i>
              <span style={{ marginRight: '10px' }}>Expense Table</span>
              <i className={`fas fa-chevron-${isExpenseDropdown ? 'down' : 'right'}`} 
                 style={{ fontSize: '12px' }}
              />
            </div>

            {isExpenseDropdown && (
              <div className="dropdown-menu">
                <Link 
                  to="/expense-table/all" 
                  className="dropdown-item"
                >
                  <i className="fas fa-list"></i>
                  <span>All Expenses</span>
                </Link>
                <Link 
                  to="/expense-table/daily" 
                  className="dropdown-item"
                >
                  <i className="fas fa-calendar-day"></i>
                  <span>Daily Expenses</span>
                </Link>

                <Link 
                  to="/expense-table/monthly" 
                  className="dropdown-item"
                >
                  <i className="fas fa-calendar-day"></i>
                  <span>Monthly Expenses</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};
