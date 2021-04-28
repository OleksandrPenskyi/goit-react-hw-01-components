import React from 'react';
import style from './TransactionHistory.module.css';

const TransactionItem = ({ type, amount, currency }) => (
  <>
    <td className={style.td}>{type}</td>
    <td className={style.td}>{amount}</td>
    <td className={style.td}>{currency}</td>
  </>
);

export default TransactionItem;
