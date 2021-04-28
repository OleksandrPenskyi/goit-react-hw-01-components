import React from 'react';
import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionItem = ({ type, amount, currency }) => (
  <>
    <td className={style.td}>{type}</td>
    <td className={style.td}>{amount}</td>
    <td className={style.td}>{currency}</td>
  </>
);

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
