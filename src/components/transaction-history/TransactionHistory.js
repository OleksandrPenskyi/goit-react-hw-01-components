import React from 'react';
import THead from './THead';
import TBody from './TBody';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ transaction }) => (
  <table className={style.table}>
    <THead />

    <TBody transaction={transaction} />
  </table>
);

export default TransactionHistory;
