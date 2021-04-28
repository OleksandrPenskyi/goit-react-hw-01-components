import React from 'react';
import style from './TransactionHistory.module.css';

const THead = () => (
  <thead className={style.thead}>
    <tr>
      <th className={style.th}>Type</th>
      <th className={style.th}>Amount</th>
      <th className={style.th}>Currency</th>
    </tr>
  </thead>
);

export default THead;
