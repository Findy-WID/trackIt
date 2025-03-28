# trackIt - Expense Tracker

A **React-based** Expense Tracker that helps users manage their finances by adding, categorizing, and analyzing their expenses. The app includes a **dashboard, expense list, pie chart visualization, monthly summaries, and goals tracking.**

##  Features

✅ **User Authentication** - Sign up and log in with ease using SweetAlert.\
✅ **Dashboard Overview** - View total expenses and a categorized pie chart.\
✅ **Add & Remove Expenses** - Quickly add, edit, and delete expenses.\
✅ **Categorization & Filtering** - Filter expenses by category or time period.\
✅ **Monthly & Daily Analysis** - Track spending trends over time.\
✅ **Savings Goals** - Set and track financial goals.\
✅ **LocalStorage Persistence** - Data is stored in the browser for easy access.

##  Tech Stack

- **Frontend**: React, React Router, CSS
- **State Management**: Context API
- **Data Visualization**: Chart.js
- **Alerts & Popups**: SweetAlert2

## 📂 Folder Structure

```
src/
│── components/       # Reusable UI components (Buttons, Cards, Forms, etc.)
│── pages/            # Main pages (Dashboard, Analysis, Daily, Goals, Auth)
│── context/          # Global state management (ExpenseContext)
│── utils/            # Helper functions (CategoryAggregator, Formatters, etc.)
│── styles/           # Global styles (App.css, theme.css)
│── assets/           # Images, icons
│── App.js            # Main component
│── index.js          # Entry point
│── routes.js         # App routing configuration
```

## ⚡ Setup & Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/expense-tracker.git
   cd expense-tracker
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the development server**
   ```sh
   npm run dev
   ```
4. **Build for production**
   ```sh
   npm run build
   ```

## 🛠 Contribution Guide

Want to contribute? Follow these steps:

1. **Fork the repository**
2. **Create a new branch**
   ```sh
   git checkout -b feature-name
   ```
3. **Make your changes and commit**
   ```sh
   git commit -m "Added a new feature"
   ```
4. **Push your branch**
   ```sh
   git push origin feature-name
   ```
5. **Create a Pull Request**

---

## 📌 Notes

- **Color Scheme**

  - **Primary (Buttons, Highlights)**: `#FFC816` (Yellow)
  - **Secondary (Navbar, Sidebar)**: `#552C88` (Purple)
  - **Text & Backgrounds**: `#FEFEFE` (White)

- **Styling Guidelines**

  - Buttons should have a **yellow background** with **black text**.
  - The **navbar should have a purple background** with **white text**.

## 📜 License

This project is **open-source** and free to use.

I thought u said I was supposed to reference my colleagues or so. it's fine if that isn't necessary or compuls
