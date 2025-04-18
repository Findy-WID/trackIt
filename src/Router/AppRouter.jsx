import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Landing from "../Pages/Landing";
import { Home } from "../Pages/Home";
import ExpenseAnalytics from "../Pages/ExpenseAnalytics";
import ExpenseTablePage from "../Pages/ExpenseTablePage";
import Daily from "../Pages/Daily";
import Monthly from "../Pages/Monthly";
import { Goals } from "../Pages/Goals";
import { Sidebar } from "../Components/Sidebar";
import { Link } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Expenses from "../Pages/Expenses";

function AppRouter() {
  const location = useLocation();
  const ShowSidebar = !["/", "/login", "/signup"].includes(location.pathname);

  return (
    <div className="App">
      {ShowSidebar && <Sidebar />}
      <div className={`contentWrapper ${ShowSidebar ? "withSidebar" : ""}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/analysis" element={<ExpenseAnalytics />} />
          <Route path="/goals" element={<Goals />} />
          <Route
            path="/expense-table"
            element={<Navigate to="/expense-table/all" replace />}
          />
          <Route path="/expense-table/all" element={<ExpenseTablePage />} />
          <Route path="/expense-table/daily" element={<Daily />} />
          <Route path="/expense-table/monthly" element={<Monthly />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRouter;
