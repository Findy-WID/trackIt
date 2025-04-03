import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "../Pages/Landing";
import { Home } from "../Pages/Home";
import ExpenseAnalytics from '../Components/ExpenseAnalytics';
import ExpenseTablePage from '../Pages/ExpenseTablePage';
import { Daily } from "../Pages/Daily";
import { Goals } from "../Pages/Goals";
import { Sidebar } from "../Components/Sidebar";
import { Link } from "react-router-dom";


function AppRouter() {

  const location = useLocation();
  const ShowSidebar = location.pathname !== "/"

  return (
      <div className="App">
          {ShowSidebar &&
            <Sidebar />
          }
        <div className="content">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/analysis" element={<ExpenseAnalytics />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/expense-table" element={<ExpenseTablePage />} />
                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
        </div>
      </div>
  )
}

export default AppRouter;