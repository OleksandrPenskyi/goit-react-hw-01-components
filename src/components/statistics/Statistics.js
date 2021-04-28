import React from 'react';
import StatTitle from './StatTitle';
import StatList from './StatList';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={style.section}>
    {title && <StatTitle title={title} />}

    <StatList stats={stats} />
  </section>
);

export default Statistics;
