import { ExpenseProvider } from "./Components/ExpenseContext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ExpenseProvider>
          <AppRouter />
          {/* ToastContainer placed here to be available throughout the app */}
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
        </ExpenseProvider>
      </Router>
    </div>
  );
}

export default App;
