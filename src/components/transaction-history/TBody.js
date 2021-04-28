import React from 'react';
import TransactionItem from './TransactionItem';
import style from './TransactionHistory.module.css';

const TBody = ({ transaction }) => (
  <tbody>
    {transaction.map(({ id, type, amount, currency }) => (
      <tr className={style.tr} key={id}>
        <TransactionItem type={type} amount={amount} currency={currency} />
      </tr>
    ))}
  </tbody>
);

export default TBody;
