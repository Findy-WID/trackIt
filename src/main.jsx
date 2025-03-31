import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router/AppRouter";
// import App from './App'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRouter />
  </React.StrictMode>
);
