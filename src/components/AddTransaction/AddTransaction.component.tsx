import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { TransactionContext } from "../../context/GlobalContext";
import { TransactionTypes } from "../../context/TransactionTypes";
import "./AddTransaction.styles.scss";

const AddTransaction = () => {
  const { dispatch } = useContext(TransactionContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: TransactionTypes.ADD_TRANSACTION,
      payload: {
        id: uuid(),
        text,
        amount: +amount,
      },
    });

    setText("");
    setAmount(0);
  };

  return (
    <div className="addTransaction-container">
      <h3 className="addTransaction-title">Add Transaction</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text" className="addTransaction-label">
            Transaction
          </label>
          <input
            className="input-text"
            type="text"
            placeholder="Enter Transaction"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="amount" className="addAmount-label">
            Amount
          </label>
          <input
            className="input-amount"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>

        <button className="addTransaction-button">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
