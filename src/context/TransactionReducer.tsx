import { ActionType, InitialState, TransactionTypes } from "./TransactionTypes";

const TransactionReducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case TransactionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: action.payload.id,
            text: action.payload.text,
            amount: action.payload.amount,
          },
        ],
      };
    case TransactionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default TransactionReducer;
