import { ExpenseProvider } from "./Components/ExpenseContext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import "./Styles/App.css";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Router className="App">
      <UserProvider>
        <ExpenseProvider>
          <AppRouter />
        </ExpenseProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
