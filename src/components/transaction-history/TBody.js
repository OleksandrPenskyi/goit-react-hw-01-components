import React from 'react';
import TransactionItem from './TransactionItem';

const TBody = ({ transaction }) => (
  <tbody>
    {transaction.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <TransactionItem type={type} amount={amount} currency={currency} />
      </tr>
    ))}
  </tbody>
);

export default TBody;
