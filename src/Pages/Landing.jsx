import React from 'react'
import "../Styles/Landing.css"

export const Landing = () => {
  return (
    <div>
      <div className="landing-container">
        <h1>Welcome to Expense Tracker</h1>
        <p>Track your daily expenses and take control of your finances.</p>
        <button onClick={() => window.location.href = "/home"}>Get Started</button>
    </div>
    </div>
  )
}
