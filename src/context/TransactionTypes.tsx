export enum TransactionTypes {
  ADD_TRANSACTION = "add_transaction",
  DELETE_TRANSACTION = "delete_transaction",
}

export type InitialState = {
  transactions: {
    id: string;
    text: string;
    amount: number;
  }[];
};

export type ActionType =
  | {
      type: TransactionTypes.ADD_TRANSACTION;
      payload: {
        id: string;
        text: string;
        amount: number;
      };
    }
  | {
      type: TransactionTypes.DELETE_TRANSACTION;
      payload: string;
    };
