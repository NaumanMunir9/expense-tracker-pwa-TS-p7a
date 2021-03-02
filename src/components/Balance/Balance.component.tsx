import React, { useContext } from "react";
import { TransactionContext } from "../../context/GlobalContext";
import "./Balance.styles.scss";

const Balance: React.FC = () => {
  const {
    state: { transactions },
  } = useContext(TransactionContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((prev, current) => (prev += current), 0);

  return (
    <div>
      <h2 className="totalBalance-text">Total Balance</h2>
      <h2 className="totalBalance-amount">PKR {total}</h2>
    </div>
  );
};

export default Balance;
