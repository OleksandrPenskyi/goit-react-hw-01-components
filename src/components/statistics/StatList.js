import React from 'react';
import StatItem from './StatItem';

const StatList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(stat => {
        return (
          <li className="item" key={stat.id}>
            <StatItem stat={stat} />
          </li>
        );
      })}
    </ul>
  );
};

export default StatList;
