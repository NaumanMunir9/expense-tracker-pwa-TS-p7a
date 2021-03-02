import React, { useContext } from "react";
import { TransactionContext } from "../../../context/GlobalContext";
import { TransactionTypes } from "../../../context/TransactionTypes";
import "./Transaction.styles.scss";

interface TransactionProps {
  id: string;
  text: string;
  amount: number;
}

const Transaction: React.FC<TransactionProps> = ({ id, text, amount }) => {
  const { dispatch } = useContext(TransactionContext);

  return (
    <div className="transaction-container">
      <li
        className={amount > 0 ? "plus" : "minus"}
        onClick={() => {
          dispatch({
            type: TransactionTypes.DELETE_TRANSACTION,
            payload: id,
          });
        }}
      >
        {text}
        <span>PKR {amount}</span>
      </li>
    </div>
  );
};

export default Transaction;
