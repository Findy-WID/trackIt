import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "../Pages/Home";
import { UserProvider } from "../context/UserContext";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
};

export default AppRouter;
