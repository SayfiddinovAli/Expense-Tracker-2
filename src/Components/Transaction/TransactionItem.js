import React from 'react';
import TransactionList from './TransactionList';
const TransactionItem = ({ transaction }) => {
  return (
    <div className="border p-3 my-2 rounded bg-light shadow-sm">
      <div className="d-flex justify-content-between">
        <h6>{transaction.date}</h6>
        <h6 className={transaction.type === 'income' ? 'text-success' : 'text-danger'}>
          {transaction.type === 'income' ? `+${transaction.amount} NT` : `${transaction.amount} NT`}
        </h6>
      </div>
      <p className="mb-1"><strong>{transaction.category}</strong></p>
      <p>{transaction.description}</p>
      <div>
        <button className="btn btn-warning btn-sm mx-1">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  );
};

export default TransactionItem;
