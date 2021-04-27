import React from 'react-dom';

import Profile from './components/profile/Profile';
import FriendList from './components/friend-list/FriendList';
import Statistics from './components/statistics/Statistics';
import TransactionHistory from './components/transaction-history/TransactionHistory';

import friends from './data/friends.json';
import statisticalData from './data/statistical-data.json';
import user from './data/user.json';
import transaction from './data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <TransactionHistory transaction={transaction} />
    </>
  );
};

export default App;
