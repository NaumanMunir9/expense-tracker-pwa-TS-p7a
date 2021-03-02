import React from "react";
import "./App.styles.scss";
import AddTransaction from "./components/AddTransaction/AddTransaction.component";
import Balance from "./components/Balance/Balance.component";
import Header from "./components/Header/Header.component";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense.component";
import TransactionList from "./components/TransactionList/TransactionList.component";
import GlobalContext from "./context/GlobalContext";

const App: React.FC = () => {
  return (
    <GlobalContext>
      <div className="app-container">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalContext>
  );
};

export default App;
