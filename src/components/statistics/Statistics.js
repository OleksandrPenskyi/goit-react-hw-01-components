import React from 'react';
import StatTitle from './StatTitle';
import StatList from './StatList';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {/* Если приходит title, то генерим разметку h2 */}
      {title && <StatTitle title={title} />}

      {/* Генерим Список */}
      <StatList stats={stats} />
    </section>
  );
};

export default Statistics;
