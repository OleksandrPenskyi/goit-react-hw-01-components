import React from 'react';
import THead from './THead';
import TBody from './TBody';

const TransactionHistory = ({ transaction }) => {
  return (
    <table className="transaction-history">
      <THead />

      <TBody transaction={transaction} />
    </table>
  );
};

export default TransactionHistory;
