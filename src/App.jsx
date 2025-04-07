import React from "react";
import { ExpenseProvider } from "./Context/ExpenseContext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import "./Styles/App.css";
import { UserProvider } from "./Context/UserContext";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router className="App">
      <UserProvider>
        <ExpenseProvider>
          <ToastContainer
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={true}
            theme="light"
            transition={Zoom}
          />
          <AppRouter />
        </ExpenseProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
