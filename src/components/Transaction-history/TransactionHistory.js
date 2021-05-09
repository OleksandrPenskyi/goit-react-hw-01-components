import React from 'react';
import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transaction }) => (
  <table className={style.table}>
    <thead className={style.thead}>
      <tr>
        <th className={style.th}>Type</th>
        <th className={style.th}>Amount</th>
        <th className={style.th}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transaction.map(({ id, type, amount, currency }) => (
        <tr className={style.tr} key={id}>
          <td className={style.td}>{type}</td>
          <td className={style.td}>{amount}</td>
          <td className={style.td}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
