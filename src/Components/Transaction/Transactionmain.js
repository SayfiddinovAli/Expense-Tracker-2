import React from 'react';
import TransactionItem from './TransactionItem';
import TransactionList from './TransactionList';
import TransactionSummary from './TransactionSummary';
import App from '../../App';
export default function TransactionMain() {
  return (
    <div className='container'>
    
      <TransactionList />
      <TransactionSummary />
    </div>
  );
}
