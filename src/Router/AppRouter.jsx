import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "../Pages/Landing";
import { Home } from "../Pages/Home";
import { Analysis } from "../Pages/Analysis";
import { Daily } from "../Pages/Daily";
import { Goals } from "../Pages/Goals";
import { Sidebar } from "../Components/Sidebar";


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
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
        </div>
      </div>
  )
}

export default AppRouter;