import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const transactions = [
    { date: '16 October 2019', type: 'income', amount: 6000, category: 'Salary', description: 'NTU salary' },
    { date: '8 October 2019', type: 'expense', amount: -70, category: 'Food & Beverage', description: 'breakfast' },
  ];

  return (
    <div>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
