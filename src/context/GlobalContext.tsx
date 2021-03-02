import React, { Dispatch, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";
import { ActionType, InitialState } from "./TransactionTypes";

const initialState: InitialState = {
  transactions: [],
};

export const TransactionContext = React.createContext<{
  state: InitialState;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const GlobalContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default GlobalContext;
