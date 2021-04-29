import React from 'react-dom';
import Profile from './components/Profile/Profile';
import FriendList from './components/Friend-list/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/Transaction-history/TransactionHistory';
import data from './data';

const { friends, statisticalData, user, transaction } = data;

const App = () => (
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

export default App;
