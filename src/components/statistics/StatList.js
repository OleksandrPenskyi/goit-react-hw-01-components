import React from 'react';
import StatItem from './StatItem';

const StatList = ({ stats }) => (
  <ul className="stat-list">
    {stats.map(({ id, label, percentage }) => (
      <li className="item" key={id}>
        <StatItem label={label} percentage={percentage} />
      </li>
    ))}
  </ul>
);

export default StatList;
