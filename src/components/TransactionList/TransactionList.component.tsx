import React, { useContext } from "react";
import { TransactionContext } from "../../context/GlobalContext";
import Transaction from "./Transaction/Transaction.component";
import "./TransactionList.styles.scss";

const TransactionList: React.FC = () => {
  const {
    state: { transactions },
  } = useContext(TransactionContext);

  return (
    <div className="transactionList-container">
      <h3 className="transactionList-title">Transaction List</h3>
      <ul className="unordered-list">
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} {...transaction} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
