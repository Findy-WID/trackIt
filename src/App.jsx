import { useState } from 'react'
import { ExpenseContext } from './Components/ExpenseContext'
import { ExpenseForm } from './Components/ExpenseForm'
import { ExpenseList } from './Components/ExpenseList'
import { PieChart } from './Components/PieChart'
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './Router/AppRouter'
import './Styles/App.css'

function App() {
  const [text, setText] = useState("")

  return (
    <Router className="App">
      <ExpenseContext.Provider value={{ text, setText }}>
        <AppRouter />
      </ExpenseContext.Provider>
     
    </Router>
  )
}

export default App
