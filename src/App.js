import React from 'react-dom';
import Profile from './components/profile/Profile';
import FriendList from './components/friend-list/FriendList';
import Statistics from './components/statistics/Statistics';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import data from './data';

const { friends, statisticalData, user, transaction } = data;

const App = () => (
  <>
    <Profile user={user} />

    <FriendList friends={friends} />

    <Statistics title="Upload stats" stats={statisticalData} />
    <Statistics stats={statisticalData} />

    <TransactionHistory transaction={transaction} />
  </>
);

export default App;
