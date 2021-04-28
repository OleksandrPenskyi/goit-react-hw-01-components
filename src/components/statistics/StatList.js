import React from 'react';
import StatItem from './StatItem';
import style from './Statistics.module.css';

const StatList = ({ stats }) => (
  <ul className={style.list}>
    {stats.map(({ id, label, percentage }) => (
      <li className={style.listItem} key={id}>
        <StatItem label={label} percentage={percentage} />
      </li>
    ))}
  </ul>
);

export default StatList;
