import React from 'react-dom';
import FriendList from './components/friend-list/FriendList';
import Statistics from './components/statistics/Statistics';

import friends from './friends.json';
import statisticalData from './statistical-data.json';

const App = () => {
  return (
    <>
      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </>
  );
};

export default App;
