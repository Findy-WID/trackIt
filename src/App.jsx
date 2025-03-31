import { ExpenseProvider } from './Components/ExpenseContext'
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './Router/AppRouter'
import './Styles/App.css'

function App() {
  return (
    <Router>
      <ExpenseProvider>
        <div className="App">
          <AppRouter />
        </div>
      </ExpenseProvider>
    </Router>
  );
}

export default App;
