import React from 'react';
import TransactionItem from './TransactionItem';

const TBody = ({ transaction }) => {
  return (
    <tbody>
      {transaction.map(item => {
        return (
          <tr key={item.id}>
            <TransactionItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        );
      })}
    </tbody>
  );
};

export default TBody;
