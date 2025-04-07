import React from "react";
import AppProviders from "./Providers/AppProviders";
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
        <AppProviders>
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
        </AppProviders>
    </Router>
  );
}

export default App;
